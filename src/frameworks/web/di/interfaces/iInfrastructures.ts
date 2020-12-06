import { IHttp } from '@adapters/infrastructures/interfaces/iHttp'
import { IStorage } from '@adapters/infrastructures/interfaces/iStorage'

export default interface IInfrastructures {
  http: IHttp
  storage: IStorage,
}