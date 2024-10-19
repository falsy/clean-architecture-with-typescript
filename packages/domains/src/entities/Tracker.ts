import ITracker from "./interfaces/ITracker"

export default class Tracker implements ITracker {
  readonly id: string
  carrierId: string
  label: string
  trackingNumber: string
  memos: string[]

  constructor(params: {
    id: string
    carrierId?: string
    label?: string
    trackingNumber?: string
    memos?: string[]
  }) {
    this.id = params.id
    this.carrierId = params?.carrierId ? params.carrierId : ""
    this.label = params?.label ? params?.label : ""
    this.trackingNumber = params?.trackingNumber ? params.trackingNumber : ""
    this.memos = params?.memos ? params.memos : []
  }

  updateCarrierId(newCarrierId: string) {
    this.carrierId = newCarrierId
  }

  updateLabel(newLabel: string) {
    this.label = newLabel
  }

  updateTrackingNumber(newTrackingNumber: string) {
    this.trackingNumber = newTrackingNumber
  }

  addMemo() {
    this.memos.push("")
  }

  updateMemo(index: number, newMemo: string) {
    if (typeof this.memos[index] !== "string") return
    this.memos[index] = newMemo
  }

  deleteMemo(index: number) {
    this.memos = this.memos.filter((_, i) => i !== index)
  }
}
