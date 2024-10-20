import ICarrierDTO from "../../dtos/interfaces/ICarrierDTO"

export default interface ICarrierRepository {
  getCarriers?(): Promise<ICarrierDTO[]>
  getCarrier?(carrierId: string): Promise<ICarrierDTO>
}
