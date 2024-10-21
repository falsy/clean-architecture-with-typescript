import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { ICarrierDTO } from "domains"
import CarrierDTO from "../../adapters/dtos/CarrierDTO"
import CarrierRepository from "../../adapters/repositories/CarrierRepository"
import CarrierModel from "../models/CarrierModel"

@Injectable()
export default class NCarrierRepository extends CarrierRepository {
  constructor(
    @InjectModel(CarrierModel)
    private carrierModel: typeof CarrierModel
  ) {
    super()
  }

  async getCarriers(): Promise<ICarrierDTO[]> {
    try {
      const carrierModels = await this.carrierModel.findAll()
      const carriers = carrierModels.map((model) => {
        return new CarrierDTO({
          id: model.uid,
          no: model.no,
          name: model.name,
          displayName: model.displayName,
          isCrawlable: model.isCrawlable,
          isPopupEnabled: model.isPopupEnabled,
          popupURL: model.popupURL
        })
      })

      return carriers
    } catch (error) {
      console.error(error)
    }
  }

  async getCarrier(carrierId: string): Promise<ICarrierDTO> {
    try {
      const carrierModel = await this.carrierModel.findOne({
        where: { uid: carrierId }
      })
      const carrier = new CarrierDTO({
        id: carrierModel.uid,
        no: carrierModel.no,
        name: carrierModel.name,
        displayName: carrierModel.displayName,
        isCrawlable: carrierModel.isCrawlable,
        isPopupEnabled: carrierModel.isPopupEnabled,
        popupURL: carrierModel.popupURL
      })

      return carrier
    } catch (error) {
      console.error(error)
    }
  }
}
