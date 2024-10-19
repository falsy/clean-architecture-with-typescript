import DeliveryLocationVO from "../../vos/DeliveryLocationVO"
import IDeliveryLocationVO from "../../vos/interfaces/IDeliveryLocationVO"

describe("DeliveryLocationVO", () => {
  let deliveryLocationVO: IDeliveryLocationVO

  beforeEach(() => {
    deliveryLocationVO = Object.freeze(
      new DeliveryLocationVO({
        name: "Warehouse",
        time: "12:00 PM"
      })
    )
  })

  it("should create a DeliveryLocationVO instance", () => {
    expect(deliveryLocationVO).toBeInstanceOf(DeliveryLocationVO)
  })

  it("should have readonly properties", () => {
    expect(deliveryLocationVO.name).toBe("Warehouse")
    expect(deliveryLocationVO.time).toBe("12:00 PM")
  })

  it("should not allow modifying readonly name property", () => {
    expect(() => {
      ;(deliveryLocationVO as any).name = "Distribution Center"
    }).toThrow()
  })

  it("should not allow modifying readonly time property", () => {
    expect(() => {
      ;(deliveryLocationVO as any).time = "1:00 PM"
    }).toThrow()
  })

  it("should initialize with default values", () => {
    const defaultLocation = new DeliveryLocationVO()
    expect(defaultLocation.name).toBe("")
    expect(defaultLocation.time).toBe("")
  })
})
