import { ICarrier, ITracker } from "../../entities"
import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerRepository {
  getDelivery?(carrier: ICarrier, trackingNumber: string): Promise<IDeliveryDTO>
  getTrackers?(): Promise<ITrackerDTO[]>
  addTracker?(tracker: ITracker): Promise<boolean>
  updateTracker?(tracker: ITracker): Promise<boolean>
  deleteTracker?(trackerId: string): Promise<boolean>
  clearTrackers?(): Promise<boolean>
}
