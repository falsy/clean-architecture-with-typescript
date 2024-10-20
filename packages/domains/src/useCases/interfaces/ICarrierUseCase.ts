import ICarrierDTO from "../../dtos/interfaces/ICarrierDTO"

export default interface ICarrierUseCase {
  getCarriers(): Promise<ICarrierDTO[]>
  getCarrier(carrierId: string): Promise<ICarrierDTO>
}
