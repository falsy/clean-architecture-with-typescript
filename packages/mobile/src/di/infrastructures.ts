import AsyncStorage from '@react-native-async-storage/async-storage';

import Http from 'adapter/src/infrastructures/Http';
import Stoarge from 'adapter/src/infrastructures/Storage';

export default () => {
  return {
    http: new Http(),
    storage: new Stoarge(AsyncStorage),
  };
};
