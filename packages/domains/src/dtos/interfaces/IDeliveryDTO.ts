import IDeliveryLocationVO from "../../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../../vos/interfaces/IDeliveryStateVO"

export default interface IDeliveryDTO {
  readonly from: IDeliveryLocationVO
  readonly progresses: Array<IDeliveryProgressVO>
  readonly state: IDeliveryStateVO
  readonly to: IDeliveryLocationVO
}
