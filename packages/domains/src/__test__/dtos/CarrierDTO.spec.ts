import CarrierDTO from "../../dtos/CarrierDTO"
import ICarrierDTO from "../../dtos/interfaces/ICarrierDTO"

describe("CarrierDTO", () => {
  let carrierDTO: ICarrierDTO

  beforeEach(() => {
    carrierDTO = Object.freeze(
      new CarrierDTO({
        id: "abc",
        no: 1,
        name: "carrierDTO123",
        displayName: "CarrierDTO-Name",
        isCrawlable: true,
        isPopupEnabled: true,
        popupURL: "http://example.com"
      })
    )
  })

  it("should create an instance with the given properties", () => {
    expect(carrierDTO.id).toBe("abc")
    expect(carrierDTO.no).toBe(1)
    expect(carrierDTO.name).toBe("carrierDTO123")
    expect(carrierDTO.displayName).toBe("CarrierDTO-Name")
    expect(carrierDTO.isCrawlable).toBe(true)
    expect(carrierDTO.isPopupEnabled).toBe(true)
    expect(carrierDTO.popupURL).toBe("http://example.com")
  })

  it("should have readonly properties", () => {
    expect(() => {
      ;(carrierDTO as any).id = "aaa"
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).no = 1
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).name = "new-id"
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).displayName = "new-name"
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).isCrawlable = true
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).isPopupEnabled = true
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).popupURL = "http://example.com"
    }).toThrow()
  })
})
