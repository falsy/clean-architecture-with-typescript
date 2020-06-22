import { IWebStorage } from './interfaces/iWebStorage';

class WebStorage implements IWebStorage {

  private storage: Storage;

  constructor() {
    this.storage = window.sessionStorage;
  }

  getToken() {
    return this.storage.getItem('token');
  }

  addToken(token: string) {
    this.storage.setItem('token', token);    
  }

  removeToken() {
    this.storage.removeItem('token');
  }

}

export default WebStorage;
