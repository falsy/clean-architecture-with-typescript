import { ISessionUseCase } from '@interfaces/useCases/session';
import { ISessionRepository } from '@interfaces/repositories/session';
import { ISessionVO } from '@interfaces/vos/session';

class SessionUseCase implements ISessionUseCase {

  readonly repository: ISessionRepository;

  constructor(sessionRepositories: ISessionRepository) {
    this.repository = sessionRepositories;
  }

  login(SessionVO: ISessionVO) {
    return this.repository.login(SessionVO);
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