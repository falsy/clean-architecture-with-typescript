import CarrierUseCase from "../../../useCases/CarrierUseCase"
import ICarrierUseCase from "../../../useCases/interfaces/ICarrierUseCase"
import ICarrierDTO from "../../../dtos/interfaces/ICarrierDTO"
import ICarrierRepository from "../../../repositories/interfaces/ICarrierRepository"

const mockCarrierRepository = {
  getCarriers: jest.fn(),
  getCarrier: jest.fn()
}

describe("CarrierUseCase", () => {
  let carrierUseCase: ICarrierUseCase

  beforeEach(() => {
    carrierUseCase = new CarrierUseCase(
      mockCarrierRepository as unknown as ICarrierRepository
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("should get carriers successfully", async () => {
    const carrierDTOs: ICarrierDTO[] = [
      {
        id: "carrier-id",
        no: 1,
        name: "Carrier Name",
        displayName: "Carrier Display Name",
        isCrawlable: true,
        isPopupEnabled: true,
        popupURL: "http://popup.url"
      }
    ]

    mockCarrierRepository.getCarriers.mockResolvedValue({
      isError: false,
      message: "",
      data: carrierDTOs
    })

    const result = await carrierUseCase.getCarriers()

    expect(mockCarrierRepository.getCarriers).toHaveBeenCalled()
    expect(result.isError).toBe(false)
    expect(result.data).toEqual(carrierDTOs)
  })

  test("should return error if getCarriers fails", async () => {
    mockCarrierRepository.getCarriers.mockResolvedValue({
      isError: true,
      message: "Error"
    })

    const result = await carrierUseCase.getCarriers()

    expect(mockCarrierRepository.getCarriers).toHaveBeenCalled()
    expect(result.isError).toBe(true)
    expect(result.message).toBe("Error")
  })

  test("should get carrier successfully", async () => {
    const carrierDTO: ICarrierDTO = {
      id: "carrier-id",
      no: 1,
      name: "Carrier Name",
      displayName: "Carrier Display Name",
      isCrawlable: true,
      isPopupEnabled: true,
      popupURL: "http://popup.url"
    }

    mockCarrierRepository.getCarrier.mockResolvedValue({
      isError: false,
      message: "",
      data: carrierDTO
    })

    const result = await carrierUseCase.getCarrier("carrier-id")

    expect(mockCarrierRepository.getCarrier).toHaveBeenCalledWith("carrier-id")
    expect(result.isError).toBe(false)
    expect(result.data).toEqual(carrierDTO)
  })

  test("should return error if getCarrier fails", async () => {
    mockCarrierRepository.getCarrier.mockResolvedValue({
      isError: true,
      message: "Error"
    })

    const result = await carrierUseCase.getCarrier("carrier-id")

    expect(mockCarrierRepository.getCarrier).toHaveBeenCalledWith("carrier-id")
    expect(result.isError).toBe(true)
    expect(result.message).toBe("Error")
  })
})
