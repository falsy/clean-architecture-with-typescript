import { ISessionRepository } from '@interfaces/repositories/session';
import IInfrastructure from '@interfaces/infrastructures';
import { ISessionVO } from '@interfaces/vos/session';
import { ITokenDTO } from '@interfaces/infrastructures/Remote';

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