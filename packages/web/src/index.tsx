import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./frameworks/styles/GlobalStyles"
import DependencyProvider from "./frameworks/di/DependencyProvider"
import Dashboard from "./frameworks/components/Dashboard"

const container = document.getElementById("wrap")
const root = ReactDOM.createRoot(container as HTMLElement)

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <DependencyProvider>
        <Dashboard />
      </DependencyProvider>
    </React.StrictMode>
  )
}
root.render(<App />)
