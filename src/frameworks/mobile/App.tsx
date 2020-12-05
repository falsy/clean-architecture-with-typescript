import React from 'react'
import { Provider } from 'react-redux'
import store from '@frameworks/mobile/redux/store'
import Index from './components/Index'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  )
}

export default App
