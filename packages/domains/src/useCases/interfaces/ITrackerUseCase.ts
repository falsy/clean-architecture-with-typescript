import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"
import { ITrackerParams } from "../../entities/interfaces/ITracker"

export default interface ITrackerUseCase {
  getDelivery(carrierId: string, trackingNumber: string): Promise<IDeliveryDTO>
  addTracker(): Promise<boolean>
  getTrackers(): Promise<ITrackerDTO[]>
  deleteTracker(trackerId: string): Promise<boolean>
  clearTrackers(): Promise<boolean>
  updateCarrierId(
    trackerParams: ITrackerParams,
    newCarrierId: string
  ): Promise<boolean>
  updateLabel(trackerParams: ITrackerParams, newLabel: string): Promise<boolean>
  updateTrackingNumber(
    trackerParams: ITrackerParams,
    newTrackingNumber: string
  ): Promise<boolean>
  addMemo(trackerParams: ITrackerParams): Promise<boolean>
  updateMemo(
    trackerParams: ITrackerParams,
    index: number,
    newMemo: string
  ): Promise<boolean>
  deleteMemo(trackerParams: ITrackerParams, index: number): Promise<boolean>
}
