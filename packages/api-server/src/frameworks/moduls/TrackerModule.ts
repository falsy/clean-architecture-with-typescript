import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import fetch from "node-fetch"
import CarrierModel from "../models/CarrierModel"
import NServerHTTP from "../infrastructures/NServerHTTP"
import NTrackerRepository from "../repositories/NTrackerRepository"
import NCarrierRepository from "../repositories/NCarrierRepository"
import NTrackerUseCase from "../useCases/NTrackerUseCase"
import NTrackerController from "../controllers/NTrackerController"

@Module({
  imports: [SequelizeModule.forFeature([CarrierModel])],
  providers: [
    {
      provide: "IHttpServer",
      useValue: fetch
    },
    {
      provide: "IServerHTTP",
      useClass: NServerHTTP
    },
    {
      provide: "ITrackerRepository",
      useClass: NTrackerRepository
    },
    {
      provide: "ICarrierRepository",
      useClass: NCarrierRepository
    },
    NTrackerUseCase
  ],
  controllers: [NTrackerController]
})
export default class TrackerModule {}
