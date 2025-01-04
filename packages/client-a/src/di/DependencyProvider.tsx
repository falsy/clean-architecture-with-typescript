import { createContext, ReactNode } from "react"
import repositoriesFn from "./repositories"
import useCasesFn from "./useCases"
import presentersFn from "./presenters"

interface Dependencies {
  presenters: ReturnType<typeof presentersFn>
}

export const DependencyContext = createContext<Dependencies | null>(null)

export default function DependencyProvider({
  children
}: {
  children: ReactNode
}) {
  const repositories = repositoriesFn("http://localhost:3000")
  const useCases = useCasesFn(repositories)
  const presenters = presentersFn(useCases)

  const dependencies = {
    presenters
  }

  return (
    <DependencyContext.Provider value={dependencies}>
      {children}
    </DependencyContext.Provider>
  )
}
