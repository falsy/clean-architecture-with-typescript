import { ITrackerUseCase, IDeliveryDTO } from "domains"
import ITrackerController from "./interfaces/ITrackerController"

export default class TrackerController implements ITrackerController {
  constructor(private readonly trackerUseCase: ITrackerUseCase) {}

  getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    return this.trackerUseCase.getDelivery(carrierId, trackingNumber)
  }
}
