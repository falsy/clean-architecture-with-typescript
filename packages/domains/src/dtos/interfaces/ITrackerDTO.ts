export default interface ITrackerDTO {
  readonly id: string
  carrierId: string
  label: string
  trackingNumber: string
  memos: string[]
}
