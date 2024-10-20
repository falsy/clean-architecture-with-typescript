import { ICarrier, IDeliveryDTO, ITrackerRepository } from "domains"
import IServerHTTP from "../infrastructures/interfaces/IServerHTTP"
import DeliveryScraper from "../../deliveryScrapers/scraper"

export default class TrackerRepository implements ITrackerRepository {
  constructor(protected readonly serverHTTP: IServerHTTP) {}

  getDelivery(
    carrier: ICarrier,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    const { name } = carrier
    return DeliveryScraper.getTrack(this.serverHTTP, name, trackingNumber)
  }
}
