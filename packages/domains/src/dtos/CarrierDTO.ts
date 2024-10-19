import ICarrierDTO from "./interfaces/ICarrierDTO"

export default class CarrierDTO implements ICarrierDTO {
  readonly id: string
  readonly no: number
  readonly name: string
  readonly displayName: string
  readonly isCrawlable: boolean
  readonly isPopupEnabled: boolean
  readonly popupURL: string

  constructor({
    id,
    no,
    name,
    displayName,
    isCrawlable,
    isPopupEnabled,
    popupURL
  }: {
    id: string
    no: number
    name: string
    displayName: string
    isCrawlable: boolean
    isPopupEnabled: boolean
    popupURL: string
  }) {
    this.id = id
    this.no = no
    this.name = name
    this.displayName = displayName
    this.isCrawlable = isCrawlable
    this.isPopupEnabled = isPopupEnabled
    this.popupURL = popupURL
  }
}
