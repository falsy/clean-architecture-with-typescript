import { IDeliveryDTO } from "domains"
import IServerHTTP from "../adapters/infrastructures/interfaces/IServerHTTP"
import CJLogisticsCrawler from "./carriers/CJLogisticsCrawler"
import DaesinCrawler from "./carriers/DaesinCrawler"
import EPostCrawler from "./carriers/EPostCrawler"
import HanjinCrawler from "./carriers/HanjinCrawler"
import KDExpCrawler from "./carriers/KDExpCrawler"
import LogenCrawler from "./carriers/LogenCrawler"
import LotteCrawler from "./carriers/LotteCrawler"

export default class DeliveryScraper {
  static getTrack(
    serverHTTP: IServerHTTP,
    carrierName: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    switch (carrierName) {
      case "epost":
        return new EPostCrawler(serverHTTP).getTrack(trackingNumber)
      case "cjlogistics":
        return new CJLogisticsCrawler(serverHTTP).getTrack(trackingNumber)
      case "hanjin":
        return new HanjinCrawler(serverHTTP).getTrack(trackingNumber)
      case "lotte":
        return new LotteCrawler(serverHTTP).getTrack(trackingNumber)
      case "kdexp":
        return new KDExpCrawler(serverHTTP).getTrack(trackingNumber)
      case "daesin":
        return new DaesinCrawler(serverHTTP).getTrack(trackingNumber)
      case "logen":
        return new LogenCrawler(serverHTTP).getTrack(trackingNumber)
    }
  }
}
