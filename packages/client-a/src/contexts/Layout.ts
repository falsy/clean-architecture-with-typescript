import { createContext, ReactNode } from "react"

const BaseLayout = createContext<{
  setBaseHeader?: (comp: ReactNode) => void
  setBaseSidebar?: (comp: ReactNode) => void
  setBaseFooter?: (comp: ReactNode) => void
  setBaseContent?: (comp: ReactNode) => void
}>({})

export { BaseLayout }
