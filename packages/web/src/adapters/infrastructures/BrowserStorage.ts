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
      // dev
      if (!(window as any).whale) {
        resolve(window.localStorage.getItem(key))
        return
      }
      this.browserStorage.get([key], (data) => {
        resolve(data)
      })
    })
  }

  setItem(key: string, value: string): Promise<boolean> {
    return new Promise((resolve) => {
      // dev
      if (!(window as any).whale) {
        window.localStorage.setItem(key, value)
        resolve(true)
        return
      }
      const data = {}
      data[key] = value
      this.browserStorage.set(data, () => {
        resolve(true)
      })
    })
  }

  removeItem(key: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.browserStorage.remove(key, () => {
        resolve(true)
      })
    })
  }

  clear(): Promise<boolean> {
    return new Promise((resolve) => {
      this.browserStorage.clear(() => {
        resolve(true)
      })
    })
  }
}
