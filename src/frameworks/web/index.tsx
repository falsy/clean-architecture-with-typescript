import * as React from "react"
import * as ReactDOM from "react-dom"
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import store from '@frameworks/web/redux/store'
import Index from "./components/Index"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    letter-spacing: 0.3px;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))