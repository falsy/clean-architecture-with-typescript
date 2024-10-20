import { ICarrierDTO } from "domains"

export default interface ICarrierController {
  getCarriers(): Promise<ICarrierDTO[]>
}
