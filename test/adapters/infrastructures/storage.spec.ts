import WebStorage from "@adapters/infrastructures/Storage";
import { IWebStorage } from "@adapters/infrastructures/interfaces/iWebStorage";

describe('create session', () => {

  let webStorage: IWebStorage;

  beforeEach(() => {
    webStorage = new WebStorage();
  });

  it('create web storage', () => {
    expect(webStorage).toHaveProperty('storage');
  });

  it('method addToken()', () => {
    const token = 'token';
    webStorage.addToken(token);

    expect(window.sessionStorage.getItem('token')).toEqual(token);
  });

  it('method getToken()', () => {
    const token = 'token';
    webStorage.addToken(token);

    expect(webStorage.getToken()).toEqual(token);
  });

  it('method removeToken', () => {
    const token = 'token';
    webStorage.addToken(token);
    webStorage.removeToken();
    
    expect(window.sessionStorage.getItem('token')).toBeNull();
  });
  
});