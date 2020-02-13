import { ISessionRepository } from '@interfaces/repositories/session';
import IInfrastructure from '@interfaces/infrastructures';
import { ISessionVO } from '@interfaces/vos/session';
import { ITokenDTO } from '@interfaces/infrastructures/httpRequest';

class SessionRepository implements ISessionRepository {

  readonly infrastructure: IInfrastructure;
  readonly isMock: boolean;

  constructor(infrastructure: IInfrastructure) {
    this.infrastructure = infrastructure;
    this.isMock = process.env.STAGE === 'MOCK';
  }

  login(SessionVO: ISessionVO): Promise<ITokenDTO> {
    if(this.isMock) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            results: {
              token: 'user token ...'
            }
          });
        }, 500);
      });
    }
    return this.infrastructure.httpRequest.login(SessionVO);
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