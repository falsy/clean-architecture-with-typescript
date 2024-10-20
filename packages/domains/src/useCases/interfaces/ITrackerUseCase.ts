import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerUseCase {
  getDelivery(carrierId: string, trackingNumber: string): Promise<IDeliveryDTO>
  addTracker(): Promise<boolean>
  getTrackers(): Promise<ITrackerDTO[]>
  deleteTracker(trackerId: string): Promise<boolean>
  clearTrackers(): Promise<boolean>
  updateCarrierId(tracker: ITrackerDTO, newCarrierId: string): Promise<boolean>
  updateLabel(tracker: ITrackerDTO, newLabel: string): Promise<boolean>
  updateTrackingNumber(
    tracker: ITrackerDTO,
    newTrackingNumber: string
  ): Promise<boolean>
  addMemo(tracker: ITrackerDTO): Promise<boolean>
  updateMemo(
    tracker: ITrackerDTO,
    index: number,
    newMemo: string
  ): Promise<boolean>
  deleteMemo(tracker: ITrackerDTO, index: number): Promise<boolean>
}
