import { AsyncStorage, AsyncStorageStatic } from 'react-native'
import { IStorage } from './interfaces/iStorage'

class MobileStorage implements IStorage {

  private storage: AsyncStorageStatic

  constructor() {
    this.storage = AsyncStorage
  }

  get(name: string): Promise<string> {
    return this.storage.getItem(name)
  }

  set(name: string, value: string): void {
    this.storage.setItem(name, value)
  }

  remove(name: string): void {
    this.storage.removeItem(name)
  }
  
}

export default MobileStorage
