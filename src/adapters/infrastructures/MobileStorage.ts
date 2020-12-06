import { AsyncStorageStatic } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { IStorage } from './interfaces/iStorage'

class MobileStorage implements IStorage {

  private storage: AsyncStorageStatic

  constructor() {
    this.storage = AsyncStorage
  }

  get(name: string): Promise<string> {
    return this.storage.getItem(name)
  }

  async set(name: string, value: string): Promise<void> {
    console.log(name, value);
    await this.storage.setItem(name, value)
  }

  remove(name: string): void {
    this.storage.removeItem(name)
  }
  
}

export default MobileStorage
