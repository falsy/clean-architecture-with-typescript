import DeliveryProgressVO from "../../vos/DeliveryProgressVO"
import DeliveryStateVO from "../../vos/DeliveryStateVO"
import IDeliveryProgressVO from "../../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../../vos/interfaces/IDeliveryStateVO"

describe("DeliveryProgressVO", () => {
  let deliveryProgressVO: IDeliveryProgressVO
  let state: IDeliveryStateVO

  beforeEach(() => {
    state = Object.freeze(
      new DeliveryStateVO({
        id: "1",
        name: "In Transit"
      })
    )
    deliveryProgressVO = Object.freeze(
      new DeliveryProgressVO({
        description: "Package received",
        location: "Warehouse",
        time: "12:00 PM",
        state
      })
    )
  })

  it("should create a DeliveryProgressVO instance", () => {
    expect(deliveryProgressVO).toBeInstanceOf(DeliveryProgressVO)
  })

  it("should have readonly properties", () => {
    expect(deliveryProgressVO.description).toBe("Package received")
    expect(deliveryProgressVO.location).toBe("Warehouse")
    expect(deliveryProgressVO.time).toBe("12:00 PM")
    expect(deliveryProgressVO.state).toBe(state)
  })

  it("should not allow modifying readonly description property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).description = "Package dispatched"
    }).toThrow()
  })

  it("should not allow modifying readonly location property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).location = "Distribution Center"
    }).toThrow()
  })

  it("should not allow modifying readonly time property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).time = "1:00 PM"
    }).toThrow()
  })

  it("should not allow modifying readonly status property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).status = new DeliveryStateVO({
        id: "2",
        name: "Delivered"
      })
    }).toThrow()
  })

  it("should initialize with default values", () => {
    const defaultProgress = new DeliveryProgressVO()
    expect(defaultProgress.description).toBe("")
    expect(defaultProgress.location).toBe("")
    expect(defaultProgress.time).toBe("")
    expect(defaultProgress.state).toBeInstanceOf(DeliveryStateVO)
    expect(defaultProgress.state.id).toBe("")
    expect(defaultProgress.state.name).toBe("")
  })
})
