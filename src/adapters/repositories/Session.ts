import { ISessionRepository } from '@interfaces/repositories/session';
import IInfrastructure from '@interfaces/infrastructures';
import { ILoginInfo } from '@interfaces/vos/session';
import { TokenDTO } from '@interfaces/infrastructures/httpRequest';

class SessionRepository implements ISessionRepository {

  readonly infrastructure: IInfrastructure;
  readonly isMock: boolean;

  constructor(infrastructure: IInfrastructure) {
    this.infrastructure = infrastructure;
    this.isMock = process.env.STAGE === 'MOCK';
  }

  login(LoginInfoVO: ILoginInfo): Promise<TokenDTO> {
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
    return this.infrastructure.httpRequest.login(LoginInfoVO);
  }

}

export default SessionRepository;