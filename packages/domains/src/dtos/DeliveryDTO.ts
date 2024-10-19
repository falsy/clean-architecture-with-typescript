import IDeliveryLocationVO from "../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../vos/interfaces/IDeliveryStateVO"
import IDeliveryDTO from "./interfaces/IDeliveryDTO"

export default class DeliveryDTO implements IDeliveryDTO {
  readonly from: IDeliveryLocationVO
  readonly to: IDeliveryLocationVO
  readonly progresses: IDeliveryProgressVO[]
  readonly state: IDeliveryStateVO

  constructor({
    from,
    to,
    progresses,
    state
  }: {
    from: IDeliveryLocationVO
    to: IDeliveryLocationVO
    progresses: Array<IDeliveryProgressVO>
    state: IDeliveryStateVO
  }) {
    this.from = from
    this.to = to
    this.progresses = progresses
    this.state = state
  }
}
