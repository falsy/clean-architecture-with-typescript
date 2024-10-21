import * as cheerio from "cheerio"
import { decode } from "html-entities"
import { IDeliveryDTO, DeliveryLocationVO, DeliveryProgressVO } from "domains"
import DeliveryDTO from "../../adapters/dtos/DeliveryDTO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import IServerHTTP from "../../adapters/infrastructures/interfaces/IServerHTTP"
import StringHelper from "../helpers/StringHelper"
import IScraping from "../interfaces/IScraping"

export default class EPostCrawler implements IScraping {
  constructor(private readonly serverHTTP: IServerHTTP) {}

  getTrack(trackingNumber: string): Promise<IDeliveryDTO> {
    return new Promise(async (resolve) => {
      const trackingRes = await this.serverHTTP.get(
        `https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1=${trackingNumber}`
      )

      try {
        const resData = await trackingRes.text()
        const $ = cheerio.load(resData)
        const $informationTable = $("#print").find("table")
        const $progressTable = $("#processTable")
        const $informations = $informationTable.find("td")

        if ($informations.length === 0) {
          throw new Error("해당 운송장이 존재하지 않거나 조회할 수 없습니다.")
        }

        const progressVOs = []
        $progressTable
          .find("tbody")
          .find("tr")
          .each((_, element) => {
            const td = $(element).find("td")
            const descriptionText = StringHelper.trim(td.eq(3).text())
            const description = descriptionText.includes("소포 물품 사진")
              ? "접수"
              : descriptionText
            const location = td.eq(2).find("a").eq(0).text()
            const time = this.parseDateTime(
              td.eq(0).html() + " " + td.eq(1).html()
            )
            const state = this.parseStatus(td.eq(3).text())
            progressVOs.push(
              new DeliveryProgressVO({
                description,
                location,
                time,
                state
              })
            )
          })
        progressVOs.reverse()

        const stateVO =
          progressVOs.length > 0
            ? progressVOs[0].state
            : this.parseStatus("상품준비중")

        const from = decode($informations.eq(0).html()).split("<br>")
        const fromVO = new DeliveryLocationVO({
          name: this.parseLocationName(from[0]),
          time: this.parseDateTime(from[1])
        })

        const to = decode($informations.eq(1).html()).split("<br>")
        const toVO = new DeliveryLocationVO({
          name: this.parseLocationName(to[0]),
          time: stateVO.name === "배달완료" ? progressVOs[0].time : ""
        })

        const deliveryDTO = new DeliveryDTO({
          from: fromVO,
          to: toVO,
          progresses: progressVOs,
          state: stateVO
        })

        resolve(deliveryDTO)
      } catch (error) {
        console.error(error)
      }
    })
  }

  private parseLocationName(value: string) {
    const short = value.substring(0, 4)
    return short + (short.includes("*") ? "" : "*")
  }

  private parseDateTime(value: string) {
    const dateTime = value.split(" ")
    const time = dateTime.length > 1 ? " " + dateTime[1] + ":00" : ""
    return dateTime[0].replace(/\./g, "-") + time
  }

  private parseStatus(value?: string) {
    if (typeof value !== "string") {
      return DeliveryStateGenerator.getState("상품이동중")
    }
    if (value.includes("상품준비중")) {
      return DeliveryStateGenerator.getState("상품준비중")
    }
    if (value.includes("접수")) {
      return DeliveryStateGenerator.getState("상품인수")
    }
    if (value.includes("배달준비")) {
      return DeliveryStateGenerator.getState("배달출발")
    }
    if (value.includes("배달완료")) {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품이동중")
  }
}
