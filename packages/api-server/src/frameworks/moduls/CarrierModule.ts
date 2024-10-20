import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import NCarrierUseCase from "../useCases/NCarrierUseCase"
import NCarriersController from "../controllers/NCarrierController"
import NCarrierRepository from "../repositories/NCarrierRepository"
import CarrierModel from "../models/CarrierModel"

@Module({
  imports: [SequelizeModule.forFeature([CarrierModel])],
  providers: [
    {
      provide: "ICarrierRepository",
      useClass: NCarrierRepository
    },
    NCarrierUseCase
  ],
  controllers: [NCarriersController]
})
export default class CarrierModule {}
