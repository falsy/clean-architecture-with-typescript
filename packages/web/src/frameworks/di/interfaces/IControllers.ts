import ICarrierController from "../../../adapters/controllers/interfaces/ICarrierController"
import ITrackerController from "../../../adapters/controllers/interfaces/ITrackerController"

export default interface IControllers {
  carrier: ICarrierController
  tracker: ITrackerController
}
