import { ITrackerUseCase, IDeliveryDTO, ITrackerDTO } from "domains"
import ITrackerController from "./interfaces/ITrackerController"

export default class TrackerController implements ITrackerController {
  constructor(private readonly trackerUseCase: ITrackerUseCase) {}

  async getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    return this.trackerUseCase.getDelivery(carrierId, trackingNumber)
  }

  async addTracker(): Promise<boolean> {
    return this.trackerUseCase.addTracker()
  }

  async getTrackers(): Promise<ITrackerDTO[]> {
    return this.trackerUseCase.getTrackers()
  }

  async updateCarrierId(
    tracker: ITrackerDTO,
    newCarrierId: string
  ): Promise<boolean> {
    return this.trackerUseCase.updateCarrierId(tracker, newCarrierId)
  }

  async updateLabel(tracker: ITrackerDTO, newLabel: string): Promise<boolean> {
    return this.trackerUseCase.updateLabel(tracker, newLabel)
  }

  async updateTrackingNumber(
    tracker: ITrackerDTO,
    newTrackingNumber: string
  ): Promise<boolean> {
    return this.trackerUseCase.updateTrackingNumber(tracker, newTrackingNumber)
  }

  async addMemo(tracker: ITrackerDTO): Promise<boolean> {
    return this.trackerUseCase.addMemo(tracker)
  }

  async updateMemo(
    tracker: ITrackerDTO,
    index: number,
    newMemo: string
  ): Promise<boolean> {
    return this.trackerUseCase.updateMemo(tracker, index, newMemo)
  }

  async deleteMemo(tracker: ITrackerDTO, index: number): Promise<boolean> {
    return this.trackerUseCase.deleteMemo(tracker, index)
  }

  async deleteTracker(trackerId: string): Promise<boolean> {
    return this.trackerUseCase.deleteTracker(trackerId)
  }

  async clearTrackers(): Promise<boolean> {
    return this.trackerUseCase.clearTrackers()
  }
}
