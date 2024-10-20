import { Inject, Injectable } from "@nestjs/common"
import { IDeliveryDTO, ICarrier } from "domains"
import TrackerRepository from "../../adapters/repositories/TrackerRepository"
import IServerHTTP from "../../adapters/infrastructures/interfaces/IServerHTTP"

@Injectable()
export default class NTrackerRepository extends TrackerRepository {
  constructor(@Inject("IServerHTTP") serverHTTP: IServerHTTP) {
    super(serverHTTP)
  }

  async getDelivery(
    carrier: ICarrier,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    return super.getDelivery(carrier, trackingNumber)
  }
}
