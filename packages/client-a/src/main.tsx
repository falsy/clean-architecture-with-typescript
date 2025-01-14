import "./global.css"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import DependencyProvider from "./di/DependencyProvider"
import { Routes } from "./Routes"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container as HTMLElement)

const App = () => {
  return (
    <StrictMode>
      <DependencyProvider>
        <Routes />
      </DependencyProvider>
    </StrictMode>
  )
}

root.render(<App />)
