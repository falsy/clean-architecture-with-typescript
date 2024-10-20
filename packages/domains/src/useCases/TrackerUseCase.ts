import TrackerDTO from "../dtos/TrackerDTO"
import IDeliveryDTO from "../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../dtos/interfaces/ITrackerDTO"
import ICarrierRepository from "../repositories/interfaces/ICarrierRepository"
import ITrackerRepository from "../repositories/interfaces/ITrackerRepository"
import Tracker from "../entities/Tracker"
import ITracker from "../entities/interfaces/ITracker"
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

    return this.trackerRepository.getDelivery(data, trackingNumber)
  }

  async addTracker(): Promise<boolean> {
    const tracker = new Tracker({
      id: this.generateUUID()
    })

    return this.trackerRepository.addTracker(tracker)
  }

  async getTrackers(): Promise<ITrackerDTO[]> {
    const data = await this.trackerRepository.getTrackers()

    const trackers = data.map((trackerDTO: ITrackerDTO) => {
      return this.convertToEntity(trackerDTO)
    })

    const trackerDTOs = trackers.map((tracker: ITracker) => {
      return this.convertToDTO(tracker)
    })

    return trackerDTOs
  }

  async deleteTracker(trackerId: string): Promise<boolean> {
    return this.trackerRepository.deleteTracker(trackerId)
  }

  async clearTrackers(): Promise<boolean> {
    return this.trackerRepository.clearTrackers()
  }

  async updateCarrierId(
    tracker: ITrackerDTO,
    newCarrierId: string
  ): Promise<boolean> {
    const trackerEntity = this.convertToEntity(tracker)
    trackerEntity.updateCarrierId(newCarrierId)
    const trackerDTO = this.convertToDTO(trackerEntity)
    return this.trackerRepository.updateTracker(trackerDTO)
  }

  async updateLabel(tracker: ITrackerDTO, newLabel: string): Promise<boolean> {
    const trackerEntity = this.convertToEntity(tracker)
    trackerEntity.updateLabel(newLabel)
    const trackerDTO = this.convertToDTO(trackerEntity)

    return this.trackerRepository.updateTracker(trackerDTO)
  }

  async updateTrackingNumber(
    tracker: ITrackerDTO,
    newTrackingNumber: string
  ): Promise<boolean> {
    const trackerEntity = this.convertToEntity(tracker)
    trackerEntity.updateTrackingNumber(newTrackingNumber)
    const trackerDTO = this.convertToDTO(trackerEntity)

    return this.trackerRepository.updateTracker(trackerDTO)
  }

  async addMemo(tracker: ITrackerDTO): Promise<boolean> {
    const trackerEntity = this.convertToEntity(tracker)
    trackerEntity.addMemo()
    const trackerDTO = this.convertToDTO(trackerEntity)

    return this.trackerRepository.updateTracker(trackerDTO)
  }

  async updateMemo(
    tracker: ITrackerDTO,
    index: number,
    newMemo: string
  ): Promise<boolean> {
    const trackerEntity = this.convertToEntity(tracker)
    trackerEntity.updateMemo(index, newMemo)
    const trackerDTO = this.convertToDTO(trackerEntity)

    return this.trackerRepository.updateTracker(trackerDTO)
  }

  async deleteMemo(tracker: ITrackerDTO, index: number): Promise<boolean> {
    const trackerEntity = this.convertToEntity(tracker)
    trackerEntity.deleteMemo(index)
    const trackerDTO = this.convertToDTO(trackerEntity)

    return this.trackerRepository.updateTracker(trackerDTO)
  }

  protected generateUUID(): string {
    const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"

    return template.replace(/[xy]/g, (c) => {
      const r = (Date.now() + Math.random() * 16) % 16 | 0
      const v = c === "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  protected convertToEntity(trackerDTO: ITrackerDTO): ITracker {
    return new Tracker({
      id: trackerDTO.id,
      carrierId: trackerDTO.carrierId,
      label: trackerDTO.label,
      trackingNumber: trackerDTO.trackingNumber,
      memos: trackerDTO.memos
    })
  }

  protected convertToDTO(tracker: ITracker): ITrackerDTO {
    return new TrackerDTO({
      id: tracker.id,
      carrierId: tracker.carrierId,
      label: tracker.label,
      trackingNumber: tracker.trackingNumber,
      memos: tracker.memos
    })
  }
}
