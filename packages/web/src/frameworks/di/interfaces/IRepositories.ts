import { ICarrierRepository, ITrackerRepository } from "domains"

export default interface IRepositories {
  carrier: ICarrierRepository
  tracker: ITrackerRepository
}
