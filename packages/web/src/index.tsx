import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { createGlobalStyle } from 'styled-components'

import Index from './components/Index'

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
      <RecoilRoot>
        <Index />
      </RecoilRoot>
    </>
  )
}

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)
