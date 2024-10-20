import { ICarrierUseCase, ITrackerUseCase } from "domains"

export default interface IUseCases {
  carrier: ICarrierUseCase
  tracker: ITrackerUseCase
}
