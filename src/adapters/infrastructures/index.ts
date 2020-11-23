import Http from './Http'
import IInfrastructures from './interfaces'
import WebStorage from './Storage'

export default (): IInfrastructures => {
  return {
    http: new Http(),
    webStorage: new WebStorage()
  }
}