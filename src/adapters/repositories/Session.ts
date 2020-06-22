import { ISessionRepository } from '@adapters/repositories/interfaces/iSession';
import IInfrastructure from '@adapters/infrastructures/interfaces/iInfrastructures';
import { ISessionVO } from '@domains/vos/interfaces/iSession';
import { ITokenDTO } from '@adapters/infrastructures/interfaces/iRemote';

class SessionRepository implements ISessionRepository {

  readonly infrastructure: IInfrastructure;

  constructor(infrastructure: IInfrastructure) {
    this.infrastructure = infrastructure;
  }

  login(SessionVO: ISessionVO): Promise<ITokenDTO> {
    return this.infrastructure.remote.login(SessionVO);
  }

  getToken() {
    return this.infrastructure.webStorage.getToken();
  }

  addToken(token: string) {
    this.infrastructure.webStorage.addToken(token);
  }

  removeToken() {
    this.infrastructure.webStorage.removeToken();
  }

}

export default SessionRepository;