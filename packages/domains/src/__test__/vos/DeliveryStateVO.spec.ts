import DeliveryStateVO from "../../vos/DeliveryStateVO"
import IDeliveryStateVO from "../../vos/interfaces/IDeliveryStateVO"

describe("DeliveryStateVO", () => {
  let deliveryStateVO: IDeliveryStateVO

  beforeEach(() => {
    deliveryStateVO = Object.freeze(
      new DeliveryStateVO({
        id: "1",
        name: "In Transit"
      })
    )
  })

  it("should create a DeliveryStateVO instance", () => {
    expect(deliveryStateVO).toBeInstanceOf(DeliveryStateVO)
  })

  it("should have readonly properties", () => {
    expect(deliveryStateVO.id).toBe("1")
    expect(deliveryStateVO.name).toBe("In Transit")
  })

  it("should not allow modifying readonly id property", () => {
    expect(() => {
      ;(deliveryStateVO as any).id = "2"
    }).toThrow()
  })

  it("should not allow modifying readonly name property", () => {
    expect(() => {
      ;(deliveryStateVO as any).name = "Delivered"
    }).toThrow()
  })

  it("should initialize with default values", () => {
    const defaultState = new DeliveryStateVO()
    expect(defaultState.id).toBe("")
    expect(defaultState.name).toBe("")
  })
})
