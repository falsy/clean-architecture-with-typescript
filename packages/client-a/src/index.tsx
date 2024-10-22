import React from "react"
import ReactDOM from "react-dom/client"
import DependencyProvider from "./di/DependencyProvider"
import { Routes } from "./components/Routes"

const container = document.getElementById("wrap")
const root = ReactDOM.createRoot(container as HTMLElement)

const App = () => {
  return (
    <React.StrictMode>
      <DependencyProvider>
        <Routes />
      </DependencyProvider>
    </React.StrictMode>
  )
}

root.render(<App />)
