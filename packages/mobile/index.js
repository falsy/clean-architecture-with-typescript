import { AppRegistry } from 'react-native'
import { RecoilRoot } from 'recoil'

import { name as appName } from './app.json'
import Index from './src/Index'

const App = () => {
  return (
    <RecoilRoot>
      <Index />
    </RecoilRoot>
  )
}

AppRegistry.registerComponent(appName, () => App)
