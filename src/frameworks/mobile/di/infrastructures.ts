import IInfrastructures from './interfaces/iInfrastructures'
import Http from '@adapters/infrastructures/Http'
import MobileStorage from '@adapters/infrastructures/MobileStorage'

export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new MobileStorage()
  }
}