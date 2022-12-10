import Http from 'adapter/src/infrastructures/Http'
import Stoarge from 'adapter/src/infrastructures/Storage'

export interface IInfrastructures {
  http: Http
  storage: Stoarge
}

export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new Stoarge((window as any).sessionStorage)
  }
}