import IBrowserStorage from "../../adapters/infrastructures/interfaces/IBrowserStorage"
import IClientHTTP from "../../adapters/infrastructures/interfaces/IClientHTTP"
import CarrierRepository from "../../adapters/repositories/CarrierRepository"
import TrackerRepository from "../../adapters/repositories/TrackerRepository"
import IRepositories from "./interfaces/IRepositories"

export default (
  clientHTTP: IClientHTTP,
  browserStorage: IBrowserStorage
): IRepositories => {
  return {
    carrier: new CarrierRepository(clientHTTP),
    tracker: new TrackerRepository(clientHTTP, browserStorage)
  }
}
