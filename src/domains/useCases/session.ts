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

}

export default SessionUseCase;