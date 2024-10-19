export default interface ICarrierDTO {
  readonly id: string
  readonly no: number
  readonly name: string
  readonly displayName: string
  readonly isCrawlable: boolean
  readonly isPopupEnabled: boolean
  readonly popupURL: string
}
