import { IDeliveryDTO } from "domains"

export default interface ITrackerController {
  getDelivery(carrierId: string, trackingNumber: string): Promise<IDeliveryDTO>
}
