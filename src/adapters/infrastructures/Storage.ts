import { IWebStorage } from './interfaces/iWebStorage'

class WebStorage implements IWebStorage {

  private storage: Storage

  constructor() {
    this.storage = window.sessionStorage
  }

  get(name: string): string {
    return this.storage.getItem(name)
  }

  set(name: string, value: string): void {
    this.storage.setItem(name, value)
  }

  remove(name: string): void {
    this.storage.removeItem(name)
  }
  
}

export default WebStorage
