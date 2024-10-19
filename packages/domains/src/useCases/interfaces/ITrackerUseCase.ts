import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../dtos/interfaces/ILayerDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerUseCase {
  getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>>
  addTracker(): Promise<ILayerDTO<boolean>>
  getTrackers(): Promise<ILayerDTO<ITrackerDTO[]>>
  deleteTracker(trackerId: string): Promise<ILayerDTO<boolean>>
  clearTrackers(): Promise<ILayerDTO<boolean>>
  updateCarrierId(
    tracker: ITrackerDTO,
    newCarrierId: string
  ): Promise<ILayerDTO<boolean>>
  updateLabel(
    tracker: ITrackerDTO,
    newLabel: string
  ): Promise<ILayerDTO<boolean>>
  updateTrackingNumber(
    tracker: ITrackerDTO,
    newTrackingNumber: string
  ): Promise<ILayerDTO<boolean>>
  addMemo(tracker: ITrackerDTO): Promise<ILayerDTO<boolean>>
  updateMemo(
    tracker: ITrackerDTO,
    index: number,
    newMemo: string
  ): Promise<ILayerDTO<boolean>>
  deleteMemo(tracker: ITrackerDTO, index: number): Promise<ILayerDTO<boolean>>
}
