import { SessionRepositoryImpl } from '../../domains/interfaces/repositories/session';
import { RemoteInfrastructureImpl } from '../../domains/interfaces/infrastructures/Remote';
import { LoginInformation } from '../../domains/vo/LoginInfo';

class SessionRepository implements SessionRepositoryImpl {

  readonly infrastructure: RemoteInfrastructureImpl;

  constructor(infrastructure: RemoteInfrastructureImpl) {
    this.infrastructure = infrastructure;
  }

  login(LoginInfoVO: LoginInformation) {
    return this.infrastructure.login(LoginInfoVO);
  }

}

export default SessionRepository;