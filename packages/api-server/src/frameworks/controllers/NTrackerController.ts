import { Controller, Get, Param } from "@nestjs/common"
import { IDeliveryDTO } from "domains"
import TrackerController from "../../adapters/controllers/TrackerController"
import NTrackerUseCase from "../useCases/NTrackerUseCase"

@Controller("tracker")
export default class NTrackerController extends TrackerController {
  constructor(trackerUseCase: NTrackerUseCase) {
    super(trackerUseCase)
  }

  @Get(":carrierId/:trackingNumber")
  async getDelivery(
    @Param("carrierId") carrierId: string,
    @Param("trackingNumber") trackingNumber: string
  ): Promise<IDeliveryDTO> {
    return super.getDelivery(carrierId, trackingNumber)
  }
}
