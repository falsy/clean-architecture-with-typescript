import CarriersController from "../../adapters/controllers/CarrierController"
import TrackerController from "../../adapters/controllers/TrackerController"
import IControllers from "./interfaces/IControllers"
import IUseCases from "./interfaces/IUseCases"

export default (useCases: IUseCases): IControllers => {
  return {
    carrier: new CarriersController(useCases.carrier),
    tracker: new TrackerController(useCases.tracker)
  }
}
