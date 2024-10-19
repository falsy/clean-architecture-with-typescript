import TrackerDTO from "../../dtos/TrackerDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

describe("TrackerDTO", () => {
  let trackerDTO: ITrackerDTO

  beforeEach(() => {
    trackerDTO = Object.freeze(
      new TrackerDTO({
        id: "test-id",
        carrierId: "carrier-id",
        label: "test-label",
        trackingNumber: "123456",
        memos: ["memo1", "memo2"]
      })
    )
  })

  it("should create a TrackerDTO instance", () => {
    expect(trackerDTO).toBeInstanceOf(TrackerDTO)
  })

  it("should have a readonly id property", () => {
    expect(trackerDTO.id).toBe("test-id")
    expect(() => {
      ;(trackerDTO as any).id = "new-id"
    }).toThrow()
  })
})
