import IInfrastructures from './interfaces/iInfrastructures'
import Http from '@adapters/infrastructures/Http'
import MobileStorage from '@adapters/infrastructures/MobileStorage'
import AsyncStorage from '@react-native-community/async-storage';

export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new MobileStorage(AsyncStorage)
  }
}