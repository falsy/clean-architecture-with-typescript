import { ICarrierUseCase, ICarrierDTO } from "domains"
import ICarrierController from "./interfaces/ICarrierController"

export default class CarriersController implements ICarrierController {
  constructor(private readonly carriersUseCase: ICarrierUseCase) {}

  getCarriers(): Promise<ICarrierDTO[]> {
    return this.carriersUseCase.getCarriers()
  }
}
