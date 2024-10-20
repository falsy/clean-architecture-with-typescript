import ICarrierDTO from "../../dtos/interfaces/ICarrierDTO"
import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerRepository {
  getDelivery?(
    carrier: ICarrierDTO,
    trackingNumber: string
  ): Promise<IDeliveryDTO>
  getTrackers?(): Promise<ITrackerDTO[]>
  addTracker?(tracker: ITrackerDTO): Promise<boolean>
  updateTracker?(tracker: ITrackerDTO): Promise<boolean>
  deleteTracker?(trackerId: string): Promise<boolean>
  clearTrackers?(): Promise<boolean>
}
