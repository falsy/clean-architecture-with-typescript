/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Index from './src/Index';
import {name as appName} from './app.json';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Index />
    </RecoilRoot>
  )
}

AppRegistry.registerComponent(appName, () => App);
