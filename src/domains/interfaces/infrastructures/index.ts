import { MockInfrastructureImpl } from './mock';
import { RemoteInfrastructureImpl } from './remote';

export default interface Infrastructures {
  mock: MockInfrastructureImpl,
  remote: RemoteInfrastructureImpl
}