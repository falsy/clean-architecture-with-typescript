import { ICarrierDTO } from "domains"

export default interface ICarrierController {
  getCarriers(): Promise<ICarrierDTO[]>
  getCarrier(carrierId: string): Promise<ICarrierDTO>
}
