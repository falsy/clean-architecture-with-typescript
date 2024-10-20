import BrowserStorage from "../../adapters/infrastructures/BrowserStorage"
import ClientHTTP from "../../adapters/infrastructures/ClientHTTP"
import IInfrastructures from "./interfaces/IInfrastructures"

export default (
  httpClient: (input: RequestInfo, init?: RequestInit) => Promise<Response>,
  browserStorage: {
    get(key: string[], callback: (result: string) => void): void
    set(data: { [key: string]: string }, callback: () => void): void
    clear(callback: () => void): void
    remove(key: string, callback: () => void): void
  }
): IInfrastructures => {
  return {
    clientHTTP: new ClientHTTP(httpClient),
    browserStorage: new BrowserStorage(browserStorage)
  }
}
