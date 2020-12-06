import { IStorage } from './interfaces/iStorage'

class WebStorage implements IStorage {

  private storage: Storage

  constructor() {
    this.storage = (window as any).sessionStorage
  }

  get(name: string): Promise<string> {
    return new Promise(resolve => {
      resolve(this.storage.getItem(name))
    })
  }

  set(name: string, value: string): void {
    this.storage.setItem(name, value)
  }

  remove(name: string): void {
    this.storage.removeItem(name)
  }
  
}

export default WebStorage
