import { Inject, Injectable } from "@nestjs/common"
import { TrackerUseCase, ITrackerRepository, ICarrierRepository } from "domains"

@Injectable()
export default class NTrackerUseCase extends TrackerUseCase {
  constructor(
    @Inject("ITrackerRepository") trackerRepository: ITrackerRepository,
    @Inject("ICarrierRepository") carrierRepository: ICarrierRepository
  ) {
    super(trackerRepository, carrierRepository)
  }
}
