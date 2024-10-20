import { createContext, ReactNode } from "react"
import controllersFn from "./controllers"
import infrastructuresFn from "./infrastructures"
import repositoriesFn from "./repositories"
import useCasesFn from "./useCases"

interface Dependencies {
  controllers: ReturnType<typeof controllersFn>
}

export const DependencyContext = createContext<Dependencies | null>(null)

export default function DependencyProvider({
  children
}: {
  children: ReactNode
}) {
  const httpClient = globalThis.fetch.bind(globalThis)
  const browserStorage = (window as any).localStorage

  const infrastructures = infrastructuresFn(httpClient, browserStorage)
  const repositories = repositoriesFn(
    infrastructures.clientHTTP,
    infrastructures.browserStorage
  )
  const useCases = useCasesFn(repositories)
  const controllers = controllersFn(useCases)

  const dependencies = {
    controllers
  }

  return (
    <DependencyContext.Provider value={dependencies}>
      {children}
    </DependencyContext.Provider>
  )
}
