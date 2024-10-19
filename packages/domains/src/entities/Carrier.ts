import ICarrier from "./interfaces/ICarrier"

export default class Carrier implements ICarrier {
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
