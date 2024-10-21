import * as cheerio from "cheerio"
import { IDeliveryDTO, DeliveryLocationVO, DeliveryProgressVO } from "domains"
import DeliveryDTO from "../../adapters/dtos/DeliveryDTO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import IServerHTTP from "../../adapters/infrastructures/interfaces/IServerHTTP"
import StringHelper from "../helpers/StringHelper"
import IScraping from "../interfaces/IScraping"

export default class LogenCrawler implements IScraping {
  constructor(private readonly serverHTTP: IServerHTTP) {}

  getTrack(trackingNumber: string): Promise<IDeliveryDTO> {
    return new Promise(async (resolve) => {
      const trackingRes = await this.serverHTTP.get(
        `https://www.ilogen.com/web/personal/trace/${trackingNumber}`
      )

      try {
        const resData = await trackingRes.text()
        const $ = cheerio.load(resData)
        const $content = $(".tab_contents")

        const $informationTable = $content.find("table")
        const $progressTable = $content.find("table").eq(1)
        const $informations = $informationTable.find("tbody")

        if ($progressTable.length === 0) {
          throw new Error("해당 운송장이 존재하지 않거나 조회할 수 없습니다.")
        }

        const progressVOs = []
        $progressTable
          .find("tbody")
          .find("tr")
          .each((_, element) => {
            const td = $(element).find("td")
            const description = StringHelper.trim(td.eq(3).text())
            const location = StringHelper.trim(td.eq(1).text())
            const time = this.parseDateTime(td.eq(0).text())
            const state = this.parseStatus(td.eq(2).text())
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
          progressVOs.length > 0 && progressVOs[0].state.name === "배달완료"
            ? progressVOs[0].state
            : this.parseStatus()

        const fromVO = new DeliveryLocationVO({
          name: this.parseLocationName(
            $informations.find("tr").eq(3).find("td").eq(1).text()
          ),
          time:
            progressVOs.length > 0
              ? progressVOs[progressVOs.length - 1].time
              : ""
        })

        const toVO = new DeliveryLocationVO({
          name: this.parseLocationName(
            $informations.find("tr").eq(3).find("td").eq(3).text()
          ),
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

  private parseDateTime(value: string = "") {
    return StringHelper.trim(value + ":00")
  }

  private parseStatus(value?: string) {
    if (typeof value !== "string") {
      return DeliveryStateGenerator.getState("상품이동중")
    }
    if (value.includes("배송출고")) {
      return DeliveryStateGenerator.getState("배달출발")
    }
    if (value.includes("배송완료")) {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품이동중")
  }
}
