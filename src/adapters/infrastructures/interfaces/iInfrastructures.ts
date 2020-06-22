import { IRemote } from './iRemote';
import { IWebStorage } from './iWebStorage';

export default interface IInfrastructures {
  remote: IRemote;
  webStorage: IWebStorage;
}