import { IRemote } from './Remote';
import { IWebStorage } from './webStorage';

export default interface IInfrastructures {
  remote: IRemote;
  webStorage: IWebStorage;
}