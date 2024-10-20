import IBrowserStorage from "../../../adapters/infrastructures/interfaces/IBrowserStorage"
import IClientHTTP from "../../../adapters/infrastructures/interfaces/IClientHTTP"

export default interface IInfrastructures {
  clientHTTP: IClientHTTP
  browserStorage: IBrowserStorage
}
