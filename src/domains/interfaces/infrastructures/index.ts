import { MockInfrastructureImpl } from './mock';
import { RemoteInfrastructureImpl } from './remote';

export default interface Presenters {
  mock: MockInfrastructureImpl,
  remote: RemoteInfrastructureImpl
}