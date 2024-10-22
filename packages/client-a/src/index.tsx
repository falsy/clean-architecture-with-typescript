import React from "react"
import ReactDOM from "react-dom/client"
import DependencyProvider from "./di/DependencyProvider"
import Dashboard from "./components/Dashboard"

const container = document.getElementById("wrap")
const root = ReactDOM.createRoot(container as HTMLElement)

const App = () => {
  return (
    <React.StrictMode>
      <DependencyProvider>
        <Dashboard />
      </DependencyProvider>
    </React.StrictMode>
  )
}

root.render(<App />)
