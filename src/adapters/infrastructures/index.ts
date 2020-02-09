import HttpRequest from './HttpRequest';
import WebStorage from './WebStorage';

export default () => {
  return {
    httpRequest: new HttpRequest(),
    webStorage: new WebStorage()
  };
};