import TrackerUseCase from "../../../useCases/TrackerUseCase"
import ITrackerUseCase from "../../../useCases/interfaces/ITrackerUseCase"
import IDeliveryDTO from "../../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../../dtos/interfaces/ITrackerDTO"
import ICarrierRepository from "../../../repositories/interfaces/ICarrierRepository"
import ITrackerRepository from "../../../repositories/interfaces/ITrackerRepository"

const mockTrackerRepository = {
  getDelivery: jest.fn(),
  addTracker: jest.fn(),
  getTrackers: jest.fn(),
  deleteTracker: jest.fn(),
  clearTrackers: jest.fn(),
  updateTracker: jest.fn()
}

const mockCarrierRepository = {
  getCarrier: jest.fn()
}

describe("TrackerUseCase", () => {
  let trackerUseCase: ITrackerUseCase

  beforeEach(() => {
    trackerUseCase = new TrackerUseCase(
      mockTrackerRepository as unknown as ITrackerRepository,
      mockCarrierRepository as unknown as ICarrierRepository
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("should get delivery successfully", async () => {
    const carrierId = "carrier-id"
    const trackingNumber = "tracking-number"
    const carrierData = { id: carrierId }

    mockCarrierRepository.getCarrier.mockResolvedValue({
      isError: false,
      message: "",
      data: carrierData
    })
    mockTrackerRepository.getDelivery.mockResolvedValue({
      isError: false,
      message: "",
      data: {} as IDeliveryDTO
    })

    const result = await trackerUseCase.getDelivery(carrierId, trackingNumber)

    expect(mockCarrierRepository.getCarrier).toHaveBeenCalledWith(carrierId)
    expect(mockTrackerRepository.getDelivery).toHaveBeenCalledWith(
      carrierData,
      trackingNumber
    )
    expect(result.isError).toBe(false)
  })

  test("should return error if getCarrier fails", async () => {
    const carrierId = "carrier-id"
    const trackingNumber = "tracking-number"

    mockCarrierRepository.getCarrier.mockResolvedValue({
      isError: true,
      message: "Error"
    })

    const result = await trackerUseCase.getDelivery(carrierId, trackingNumber)

    expect(mockCarrierRepository.getCarrier).toHaveBeenCalledWith(carrierId)
    expect(result.isError).toBe(true)
    expect(result.message).toBe("Error")
  })

  test("should add tracker successfully", async () => {
    mockTrackerRepository.addTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.addTracker()

    expect(mockTrackerRepository.addTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should get trackers successfully", async () => {
    const trackerDTOs = [
      {
        id: "tracker-id",
        carrierId: "carrier-id",
        label: "",
        trackingNumber: "",
        memos: []
      } as ITrackerDTO
    ]

    mockTrackerRepository.getTrackers.mockResolvedValue({
      isError: false,
      message: "",
      data: trackerDTOs
    })

    const result = await trackerUseCase.getTrackers()

    expect(mockTrackerRepository.getTrackers).toHaveBeenCalled()
    expect(result.isError).toBe(false)
    expect(result.data).toEqual(trackerDTOs)
  })

  test("should delete tracker successfully", async () => {
    const trackerId = "tracker-id"

    mockTrackerRepository.deleteTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.deleteTracker(trackerId)

    expect(mockTrackerRepository.deleteTracker).toHaveBeenCalledWith(trackerId)
    expect(result.isError).toBe(false)
  })

  test("should clear trackers successfully", async () => {
    mockTrackerRepository.clearTrackers.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.clearTrackers()

    expect(mockTrackerRepository.clearTrackers).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should update carrier id successfully", async () => {
    const trackerDTO = {
      id: "tracker-id",
      carrierId: "old-carrier-id",
      label: "",
      trackingNumber: "",
      memos: []
    } as ITrackerDTO
    const newCarrierId = "new-carrier-id"

    mockTrackerRepository.updateTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.updateCarrierId(
      trackerDTO,
      newCarrierId
    )

    expect(mockTrackerRepository.updateTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should update label successfully", async () => {
    const trackerDTO = {
      id: "tracker-id",
      carrierId: "carrier-id",
      label: "old-label",
      trackingNumber: "",
      memos: []
    } as ITrackerDTO
    const newLabel = "new-label"

    mockTrackerRepository.updateTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.updateLabel(trackerDTO, newLabel)

    expect(mockTrackerRepository.updateTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should update tracking number successfully", async () => {
    const trackerDTO = {
      id: "tracker-id",
      carrierId: "carrier-id",
      label: "",
      trackingNumber: "old-tracking-number",
      memos: []
    } as ITrackerDTO
    const newTrackingNumber = "new-tracking-number"

    mockTrackerRepository.updateTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.updateTrackingNumber(
      trackerDTO,
      newTrackingNumber
    )

    expect(mockTrackerRepository.updateTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should add memo successfully", async () => {
    const trackerDTO = {
      id: "tracker-id",
      carrierId: "carrier-id",
      label: "",
      trackingNumber: "",
      memos: []
    } as ITrackerDTO

    mockTrackerRepository.updateTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.addMemo(trackerDTO)

    expect(mockTrackerRepository.updateTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should update memo successfully", async () => {
    const trackerDTO = {
      id: "tracker-id",
      carrierId: "carrier-id",
      label: "",
      trackingNumber: "",
      memos: ["old-memo"]
    } as ITrackerDTO
    const newMemo = "new-memo"

    mockTrackerRepository.updateTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.updateMemo(trackerDTO, 0, newMemo)

    expect(mockTrackerRepository.updateTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })

  test("should delete memo successfully", async () => {
    const trackerDTO = {
      id: "tracker-id",
      carrierId: "carrier-id",
      label: "",
      trackingNumber: "",
      memos: ["memo"]
    } as ITrackerDTO

    mockTrackerRepository.updateTracker.mockResolvedValue({
      isError: false,
      message: "",
      data: true
    })

    const result = await trackerUseCase.deleteMemo(trackerDTO, 0)

    expect(mockTrackerRepository.updateTracker).toHaveBeenCalled()
    expect(result.isError).toBe(false)
  })
})
