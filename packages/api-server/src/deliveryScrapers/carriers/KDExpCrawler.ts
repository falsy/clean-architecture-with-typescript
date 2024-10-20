import {
  IDeliveryDTO,
  DeliveryDTO,
  DeliveryLocationVO,
  DeliveryProgressVO
} from "domains"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import IServerHTTP from "../../adapters/infrastructures/interfaces/IServerHTTP"
import IScraping from "../interfaces/IScraping"

export default class KDExpCrawler implements IScraping {
  constructor(private readonly serverHTTP: IServerHTTP) {}

  getTrack(trackingNumber: string): Promise<IDeliveryDTO> {
    return new Promise(async (resolve) => {
      const trackingRes = await this.serverHTTP.get(
        `https://kdexp.com/service/delivery/ajax_basic.do?barcode=${trackingNumber}`
      )

      try {
        const resData = await trackingRes.json()
        if (resData.result !== "suc") {
          throw new Error("해당 운송장이 존재하지 않거나 조회할 수 없습니다.")
        }

        const informationTable = resData.info
        const progressTable = resData.items

        const progressVOs = progressTable
          .map((row) => {
            return new DeliveryProgressVO({
              description: `연락처: ${row.tel}`,
              location: row.location,
              time: this.parseDateTime(row.reg_date),
              state: this.parseStatus(row.stat)
            })
          })
          .reverse()

        const stateVO =
          progressVOs.length > 0 ? progressVOs[0].state : this.parseStatus()

        const fromVO = new DeliveryLocationVO({
          name: this.parseLocationName(informationTable.send_name),
          time:
            progressVOs.length > 0
              ? progressVOs[progressVOs.length - 1].time
              : ""
        })

        const toVO = new DeliveryLocationVO({
          name: this.parseLocationName(informationTable.re_name),
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
    return value.split(".")[0]
  }

  private parseStatus(value?: string) {
    if (typeof value !== "string") {
      return DeliveryStateGenerator.getState("상품이동중")
    }
    if (value.includes("접수완료")) {
      return DeliveryStateGenerator.getState("상품인수")
    }
    if (value.includes("배송완료")) {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품이동중")
  }
}
