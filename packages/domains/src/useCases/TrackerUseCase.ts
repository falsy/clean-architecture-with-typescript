import Tracker from "../entities/Tracker"
import ITracker, { ITrackerParams } from "../entities/interfaces/ITracker"
import IDeliveryDTO from "../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../dtos/interfaces/ITrackerDTO"
import ICarrierRepository from "../repositories/interfaces/ICarrierRepository"
import ITrackerRepository from "../repositories/interfaces/ITrackerRepository"
import ITrackerUseCase from "./interfaces/ITrackerUseCase"

export default class TrackerUseCase implements ITrackerUseCase {
  private trackerRepository: ITrackerRepository
  private carrierRepository: ICarrierRepository

  constructor(
    trackerRepository: ITrackerRepository,
    carrierRepository: ICarrierRepository
  ) {
    this.trackerRepository = trackerRepository
    this.carrierRepository = carrierRepository
  }

  async getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    const data = await this.carrierRepository.getCarrier(carrierId)
    const delivery = await this.trackerRepository.getDelivery(
      data,
      trackingNumber
    )

    return delivery
  }

  async addTracker(): Promise<boolean> {
    const tracker = new Tracker({
      id: this.generateUUID()
    })

    return this.trackerRepository.addTracker(tracker)
  }

  async getTrackers(): Promise<ITracker[]> {
    const data = await this.trackerRepository.getTrackers()
    const trackers = data.map((trackerDTO: ITrackerDTO) => {
      return new Tracker(trackerDTO)
    })

    return trackers
  }

  async deleteTracker(trackerId: string): Promise<boolean> {
    return this.trackerRepository.deleteTracker(trackerId)
  }

  async clearTrackers(): Promise<boolean> {
    return this.trackerRepository.clearTrackers()
  }

  async updateCarrierId(
    trackerParams: ITrackerParams,
    newCarrierId: string
  ): Promise<boolean> {
    const trackerEntity = new Tracker(trackerParams)
    trackerEntity.updateCarrierId(newCarrierId)

    return this.trackerRepository.updateTracker(trackerEntity)
  }

  async updateLabel(
    trackerParams: ITrackerParams,
    newLabel: string
  ): Promise<boolean> {
    const trackerEntity = new Tracker(trackerParams)
    trackerEntity.updateLabel(newLabel)

    return this.trackerRepository.updateTracker(trackerEntity)
  }

  async updateTrackingNumber(
    trackerParams: ITrackerParams,
    newTrackingNumber: string
  ): Promise<boolean> {
    const trackerEntity = new Tracker(trackerParams)
    trackerEntity.updateTrackingNumber(newTrackingNumber)

    return this.trackerRepository.updateTracker(trackerEntity)
  }

  async addMemo(trackerParams: ITrackerParams): Promise<boolean> {
    const trackerEntity = new Tracker(trackerParams)
    trackerEntity.addMemo()

    return this.trackerRepository.updateTracker(trackerEntity)
  }

  async updateMemo(
    trackerParams: ITrackerParams,
    index: number,
    newMemo: string
  ): Promise<boolean> {
    const trackerEntity = new Tracker(trackerParams)
    trackerEntity.updateMemo(index, newMemo)

    return this.trackerRepository.updateTracker(trackerEntity)
  }

  async deleteMemo(
    trackerParams: ITrackerParams,
    index: number
  ): Promise<boolean> {
    const trackerEntity = new Tracker(trackerParams)
    trackerEntity.deleteMemo(index)

    return this.trackerRepository.updateTracker(trackerEntity)
  }

  protected generateUUID(): string {
    const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"

    return template.replace(/[xy]/g, (c) => {
      const r = (Date.now() + Math.random() * 16) % 16 | 0
      const v = c === "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
}
