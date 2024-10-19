import IDeliveryStateVO from "./interfaces/IDeliveryStateVO"

export default class DeliveryStateVO implements IDeliveryStateVO {
  readonly id: string
  readonly name: string

  constructor(params?: { id?: string; name?: string }) {
    this.id = params?.id ? params.id : ""
    this.name = params?.name ? params.name : ""
  }
}
