import IDeliveryProgressVO from "./interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "./interfaces/IDeliveryStateVO"
import DeliveryStateVO from "./DeliveryStateVO"

export default class DeliveryProgressVO implements IDeliveryProgressVO {
  readonly description: string
  readonly location: string
  readonly time: string
  readonly state: IDeliveryStateVO

  constructor(params?: {
    description?: string
    location?: string
    time?: string
    state?: IDeliveryStateVO
  }) {
    this.description = params?.description ? params.description : ""
    this.location = params?.location ? params.location : ""
    this.time = params?.time ? params.time : ""
    this.state = params?.state ? params.state : new DeliveryStateVO()
  }
}
