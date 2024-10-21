import { ICarrier } from "../../entities"

export default interface ICarrierUseCase {
  getCarriers(): Promise<ICarrier[]>
  getCarrier(carrierId: string): Promise<ICarrier>
}
