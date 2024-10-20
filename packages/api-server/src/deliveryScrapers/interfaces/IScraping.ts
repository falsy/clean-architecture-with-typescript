import { IDeliveryDTO } from "domains"

export default interface IScraping {
  getTrack(trackingNumber: string): Promise<IDeliveryDTO>
}
