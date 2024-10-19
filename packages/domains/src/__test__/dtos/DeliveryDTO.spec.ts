import DeliveryDTO from "../../dtos/DeliveryDTO"
import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import DeliveryLocationVO from "../../vos/DeliveryLocationVO"
import DeliveryProgressVO from "../../vos/DeliveryProgressVO"
import DeliveryStateVO from "../../vos/DeliveryStateVO"
import IDeliveryLocationVO from "../../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../../vos/interfaces/IDeliveryStateVO"

describe("DeliveryDTO", () => {
  let from: IDeliveryLocationVO
  let to: IDeliveryLocationVO
  let progresses: Array<IDeliveryProgressVO>
  let state: IDeliveryStateVO
  let deliveryDTO: IDeliveryDTO

  beforeEach(() => {
    from = Object.freeze(
      new DeliveryLocationVO({
        name: "Warehouse",
        time: "8:00 AM"
      })
    )
    to = Object.freeze(
      new DeliveryLocationVO({
        name: "Customer",
        time: "5:00 PM"
      })
    )
    state = Object.freeze(
      new DeliveryStateVO({
        id: "1",
        name: "In Transit"
      })
    )
    progresses = [
      new DeliveryProgressVO({
        description: "Package received",
        location: "Warehouse",
        time: "8:00 AM",
        state: state
      }),
      new DeliveryProgressVO({
        description: "Package in transit",
        location: "Distribution Center",
        time: "12:00 PM",
        state: state
      })
    ]
    deliveryDTO = Object.freeze(
      new DeliveryDTO({
        from,
        progresses,
        state,
        to
      })
    )
  })

  it("should create a DeliveryDTO instance", () => {
    expect(deliveryDTO).toBeInstanceOf(DeliveryDTO)
  })

  it("should have readonly properties", () => {
    expect(deliveryDTO.from).toBe(from)
    expect(deliveryDTO.to).toBe(to)
    expect(deliveryDTO.state).toBe(state)
    expect(deliveryDTO.progresses).toBe(progresses)
  })

  it("should not allow modifying readonly from property", () => {
    expect(() => {
      ;(deliveryDTO as any).from = new DeliveryLocationVO({
        name: "New Location",
        time: "9:00 AM"
      })
    }).toThrow()
  })

  it("should not allow modifying readonly to property", () => {
    expect(() => {
      ;(deliveryDTO as any).to = new DeliveryLocationVO({
        name: "New Location",
        time: "6:00 PM"
      })
    }).toThrow()
  })

  it("should not allow modifying readonly state property", () => {
    expect(() => {
      ;(deliveryDTO as any).state = new DeliveryStateVO({
        id: "2",
        name: "Delivered"
      })
    }).toThrow()
  })

  it("should not allow modifying readonly progresses property", () => {
    expect(() => {
      ;(deliveryDTO as any).progresses = [
        new DeliveryProgressVO({
          description: "New progress",
          location: "New Location",
          time: "10:00 AM",
          state
        })
      ]
    }).toThrow()
  })

  it("should initialize with provided values", () => {
    expect(deliveryDTO.from.name).toBe("Warehouse")
    expect(deliveryDTO.from.time).toBe("8:00 AM")
    expect(deliveryDTO.to.name).toBe("Customer")
    expect(deliveryDTO.to.time).toBe("5:00 PM")
    expect(deliveryDTO.state.id).toBe("1")
    expect(deliveryDTO.state.name).toBe("In Transit")
    expect(deliveryDTO.progresses.length).toBe(2)
    expect(deliveryDTO.progresses[0].description).toBe("Package received")
    expect(deliveryDTO.progresses[0].location).toBe("Warehouse")
    expect(deliveryDTO.progresses[0].time).toBe("8:00 AM")
    expect(deliveryDTO.progresses[0].state.id).toBe("1")
    expect(deliveryDTO.progresses[0].state.name).toBe("In Transit")
  })

  it("should initialize with default values for properties", () => {
    const defaultDTO = new DeliveryDTO({
      from: new DeliveryLocationVO(),
      to: new DeliveryLocationVO(),
      progresses: [],
      state: new DeliveryStateVO()
    })

    expect(defaultDTO.from.name).toBe("")
    expect(defaultDTO.from.time).toBe("")
    expect(defaultDTO.to.name).toBe("")
    expect(defaultDTO.to.time).toBe("")
    expect(defaultDTO.state.id).toBe("")
    expect(defaultDTO.state.name).toBe("")
    expect(defaultDTO.progresses).toEqual([])
  })
})
