import CarrierDTO from "../dtos/CarrierDTO"
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

  async getCarriers(): Promise<ICarrierDTO[]> {
    const data = await this.carrierRepository.getCarriers()

    const carriers = data.map((carrierDTO: ICarrierDTO) => {
      return this.convertToEntity(carrierDTO)
    })

    const carrierDTOs = carriers.map((carrier: ICarrier) => {
      return this.convertToDTO(carrier)
    })

    return carrierDTOs
  }

  async getCarrier(carrierId: string): Promise<ICarrierDTO> {
    const data = await this.carrierRepository.getCarrier(carrierId)

    const carriers = this.convertToEntity(data)
    const carrierDTOs = this.convertToDTO(carriers)

    return carrierDTOs
  }

  protected convertToEntity(carrierDTO: ICarrierDTO): ICarrier {
    return new Carrier({
      id: carrierDTO.id,
      no: carrierDTO.no,
      name: carrierDTO.name,
      displayName: carrierDTO.displayName,
      isCrawlable: carrierDTO.isCrawlable,
      isPopupEnabled: carrierDTO.isPopupEnabled,
      popupURL: carrierDTO.popupURL
    })
  }

  protected convertToDTO(carrier: ICarrier): ICarrierDTO {
    return new CarrierDTO({
      id: carrier.id,
      no: carrier.no,
      name: carrier.name,
      displayName: carrier.displayName,
      isCrawlable: carrier.isCrawlable,
      isPopupEnabled: carrier.isPopupEnabled,
      popupURL: carrier.popupURL
    })
  }
}
