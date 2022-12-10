export interface IStorage {
  get(name: string): Promise<string>
  set(name: string, value: string): void
  remove(name: string): void
}

class Storage implements IStorage {

  private storage: any

  constructor(storage: any) {
    this.storage = storage
  }

  async get(name: string): Promise<string> {
    return await this.storage.getItem(name)
  }

  async set(name: string, value: string): Promise<void> {
    await this.storage.setItem(name, value)
  }

  async remove(name: string): Promise<void> {
    await this.storage.removeItem(name)
  }
  
}

export default Storage
