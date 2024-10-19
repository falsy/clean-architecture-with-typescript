import Tracker from "../../../entities/Tracker"
import ITracker from "../../../entities/interfaces/ITracker"

describe("Tracker Entity", () => {
  let tracker: ITracker

  beforeEach(() => {
    tracker = new Tracker({
      id: "trackerId",
      carrierId: "carrierId",
      label: "label",
      trackingNumber: "111",
      memos: []
    })
  })

  it("should create a Tracker instance", () => {
    expect(tracker).toBeInstanceOf(Tracker)
    expect(tracker.id).toBe("trackerId")
    expect(tracker.carrierId).toBe("carrierId")
    expect(tracker.label).toBe("label")
    expect(tracker.trackingNumber).toBe("111")
    expect(tracker.memos).toEqual([])
  })

  it("should update the carrierId", () => {
    tracker.updateCarrierId("newCarrierId")
    expect(tracker.carrierId).toBe("newCarrierId")
  })

  it("should update the label", () => {
    const newLabel = "New Label"
    tracker.updateLabel(newLabel)
    expect(tracker.label).toBe(newLabel)
  })

  it("should update the tracking number", () => {
    const newTrackingNumber = "222"
    tracker.updateTrackingNumber(newTrackingNumber)
    expect(tracker.trackingNumber).toBe(newTrackingNumber)
  })

  it("should add a memo", () => {
    tracker.addMemo()
    expect(tracker.memos).toHaveLength(1)
    expect(tracker.memos[0]).toBe("")
  })

  it("should update a memo at a specific index", () => {
    tracker.addMemo()
    tracker.updateMemo(0, "New memo")
    expect(tracker.memos[0]).toBe("New memo")
  })

  it("should not update a memo if the index is out of bounds", () => {
    tracker.updateMemo(1, "New memo")
    expect(tracker.memos).toHaveLength(0)
  })

  it("should delete a memo at a specific index", () => {
    tracker.addMemo()
    tracker.addMemo()
    tracker.updateMemo(0, "Memo 1")
    tracker.updateMemo(1, "Memo 2")

    tracker.deleteMemo(0)
    expect(tracker.memos).toHaveLength(1)
    expect(tracker.memos[0]).toBe("Memo 2")
  })

  it("should not change memos if trying to delete a memo with an out of bounds index", () => {
    tracker.addMemo()
    tracker.updateMemo(0, "Memo 1")
    tracker.deleteMemo(1)
    expect(tracker.memos).toHaveLength(1)
    expect(tracker.memos[0]).toBe("Memo 1")
  })
})
