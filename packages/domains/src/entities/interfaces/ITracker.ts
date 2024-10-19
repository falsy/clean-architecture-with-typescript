export default interface ITracker {
  readonly id: string
  carrierId: string
  label: string
  trackingNumber: string
  memos: string[]
  updateLabel(newLabel: string): void
  updateTrackingNumber(newTrackingNumber: string): void
  updateCarrierId(newCarrierId: string): void
  addMemo(): void
  updateMemo(index: number, newMemo: string): void
  deleteMemo(index: number): void
}
