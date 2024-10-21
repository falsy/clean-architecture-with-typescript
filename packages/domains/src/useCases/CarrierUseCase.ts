import ICarrierDTO from "../dtos/interfaces/ICarrierDTO"
import ICarrierRepository from "../repositories/interfaces/ICarrierRepository"
import Carrier from "../entities/Carrier"
import ICarrier from "../entities/interfaces/ICarrier"
import ICarrierUseCase from "./interfaces/ICarrierUseCase"

export default class CarrierUseCase implements ICarrierUseCase {
  private carrierRepository: ICarrierRepository

  constructor(carrierRepository: ICarrierRepository) {
    this.carrierRepository = carrierRepository
  }

  async getCarriers(): Promise<ICarrier[]> {
    const data = await this.carrierRepository.getCarriers()
    const carriers = data.map((carrierDTO: ICarrierDTO) => {
      return new Carrier(carrierDTO)
    })

    return carriers
  }

  async getCarrier(carrierId: string): Promise<ICarrier> {
    const data = await this.carrierRepository.getCarrier(carrierId)
    const carriers = new Carrier(data)

    return carriers
  }
}
