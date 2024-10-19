import Carrier from "../../../entities/Carrier"
import ICarrier from "../../../entities/interfaces/ICarrier"

describe("Carrier", () => {
  let carrier: ICarrier

  beforeEach(() => {
    carrier = Object.freeze(
      new Carrier({
        id: "abc",
        no: 1,
        name: "carrier123",
        displayName: "Carrier Name",
        isCrawlable: true,
        isPopupEnabled: true,
        popupURL: "http://example.com"
      })
    )
  })

  it("should create an instance with the given properties", () => {
    expect(carrier.id).toBe("abc")
    expect(carrier.no).toBe(1)
    expect(carrier.name).toBe("carrier123")
    expect(carrier.displayName).toBe("Carrier Name")
    expect(carrier.isCrawlable).toBe(true)
    expect(carrier.isPopupEnabled).toBe(true)
    expect(carrier.popupURL).toBe("http://example.com")
  })

  it("should have readonly properties", () => {
    expect(() => {
      ;(carrier as any).id = "bbb"
    }).toThrow()

    expect(() => {
      ;(carrier as any).no = 1
    }).toThrow()

    expect(() => {
      ;(carrier as any).name = "new-id"
    }).toThrow()

    expect(() => {
      ;(carrier as any).displayName = "new-name"
    }).toThrow()

    expect(() => {
      ;(carrier as any).isCrawlable = true
    }).toThrow()

    expect(() => {
      ;(carrier as any).isPopupEnabled = true
    }).toThrow()

    expect(() => {
      ;(carrier as any).popupURL = "http://example.com"
    }).toThrow()
  })
})
