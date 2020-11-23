import { IHttp } from './iHttp';
import { IWebStorage } from './iWebStorage';

export default interface IInfrastructures {
  http: IHttp;
  webStorage: IWebStorage;
}