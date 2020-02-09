import { ISessionUseCase } from '@interfaces/useCases/session';
import { ISessionRepository } from '@interfaces/repositories/session';
import { ILoginInfo } from '@interfaces/vos/session';

class SessionUseCase implements ISessionUseCase {

  readonly repository: ISessionRepository;

  constructor(sessionRepositories: ISessionRepository) {
    this.repository = sessionRepositories;
  }

  login(LoginInfoVO: ILoginInfo) {
    return this.repository.login(LoginInfoVO);
  }

  getToken() {
    return this.repository.getToken();
  }

  addToken(token: string) {
    this.repository.addToken(token);
  }

  removeToken() {
    this.repository.removeToken();
  }

}

export default SessionUseCase;