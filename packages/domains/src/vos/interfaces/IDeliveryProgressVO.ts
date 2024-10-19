import IDeliveryStateVO from "./IDeliveryStateVO"

export default interface IDeliveryProgressVO {
  readonly description: string
  readonly location: string
  readonly time: string
  readonly state: IDeliveryStateVO
}
