import ICarrierDTO from "../../dtos/interfaces/ICarrierDTO"
import ILayerDTO from "../../dtos/interfaces/ILayerDTO"

export default interface ICarrierRepository {
  getCarriers?(): Promise<ILayerDTO<ICarrierDTO[]>>
  getCarrier?(carrierId: string): Promise<ILayerDTO<ICarrierDTO>>
}
