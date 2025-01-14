import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Routes } from "./Routes"
import "./global.css"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container as HTMLElement)

const App = () => {
  return (
    <StrictMode>
      <Routes />
    </StrictMode>
  )
}

root.render(<App />)
