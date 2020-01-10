import { SessionUseCaseImpl } from '../interfaces/useCases/session';
import { SessionRepositoryImpl } from '../interfaces/repositories/session';
import { LoginInformation } from '../vo/LoginInfo';

class SessionUseCase implements SessionUseCaseImpl {

  readonly repository: SessionRepositoryImpl;

  constructor(sessionRepositories: SessionRepositoryImpl) {
    this.repository = sessionRepositories;
  }

  login(LoginInfoVO: LoginInformation) {
    return this.repository.login(LoginInfoVO);
  }

}

export default SessionUseCase;