import { IHttpRequest } from './httpRequest';
import { IWebStorage } from './webStorage';

export default interface IInfrastructures {
  httpRequest: IHttpRequest;
  webStorage: IWebStorage;
}