import IDeliveryLocationVO from "./interfaces/IDeliveryLocationVO"

export default class DeliveryLocationVO implements IDeliveryLocationVO {
  readonly name: string
  readonly time: string

  constructor(params?: { name?: string; time?: string; address?: string }) {
    this.name = params?.name ? params.name : ""
    this.time = params?.time ? params.time : ""
  }
}
