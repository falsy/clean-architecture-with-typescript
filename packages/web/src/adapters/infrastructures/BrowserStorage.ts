import IBrowserStorage from "./interfaces/IBrowserStorage"

export default class BrowserStorage implements IBrowserStorage {
  constructor(
    private readonly browserStorage: {
      get(key: string[], callback: (result: string) => void): void
      set(data: { [key: string]: string }, callback: () => void): void
      clear(callback: () => void): void
      remove(key: string, callback: () => void): void
    }
  ) {}

  getItem(key: string): Promise<string | null> {
    return new Promise(async (resolve) => {
      resolve(window.localStorage.getItem(key))
    })
  }

  setItem(key: string, value: string): Promise<boolean> {
    return new Promise((resolve) => {
      window.localStorage.setItem(key, value)
      resolve(true)
    })
  }

  removeItem(key: string): Promise<boolean> {
    return new Promise((resolve) => {
      window.localStorage.removeItem(key)
      resolve(true)
    })
  }

  clear(): Promise<boolean> {
    return new Promise((resolve) => {
      window.localStorage.clear()
      resolve(true)
    })
  }
}
