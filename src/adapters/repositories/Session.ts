import { ISessionRepository } from '@domains/interfaces/repositories/session';
import IInfrastructure from '@domains/interfaces/infrastructures';
import { ILoginInfo } from '@domains/interfaces/vos/session';
import { TokenDTO } from '@domains/interfaces/infrastructures/httpRequest';

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