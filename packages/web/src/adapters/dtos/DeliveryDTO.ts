import {
  IDeliveryDTO,
  IDeliveryLocationVO,
  IDeliveryProgressVO,
  IDeliveryStateVO
} from "domains"

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
