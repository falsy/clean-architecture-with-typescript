export interface IStorage {
  get(name: string): Promise<string>
  set(name: string, value: string): void
  remove(name: string): void
}

class MobileStorage implements IStorage {

  private storage: any

  constructor(storage: any) {
    this.storage = storage
  }

  get(name: string): Promise<string> {
    return this.storage.getItem(name)
  }

  async set(name: string, value: string): Promise<void> {
    await this.storage.setItem(name, value)
  }

  remove(name: string): void {
    this.storage.removeItem(name)
  }
  
}

export default MobileStorage
