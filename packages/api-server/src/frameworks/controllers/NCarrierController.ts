import { Controller, Get, Param } from "@nestjs/common"
import { ICarrierDTO } from "domains"
import CarriersController from "../../adapters/controllers/CarrierController"
import NCarrierUseCase from "../useCases/NCarrierUseCase"

@Controller("")
export default class NCarriersController extends CarriersController {
  constructor(carriersUseCase: NCarrierUseCase) {
    super(carriersUseCase)
  }

  @Get("carriers")
  async getCarriers(): Promise<ICarrierDTO[]> {
    return super.getCarriers()
  }

  @Get("carrier/:carrierId")
  async getCarrier(
    @Param("carrierId") carrierId: string
  ): Promise<ICarrierDTO> {
    return super.getCarrier(carrierId)
  }
}
