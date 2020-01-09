import { SessionUseCaseImpl } from '../interfaces/useCases/session';
import { SessionRepositoryImpl } from '../interfaces/repositories/session';

class SessionUseCase implements SessionUseCaseImpl {

  readonly repository: SessionRepositoryImpl;

  constructor(sessionRepositories: SessionRepositoryImpl) {
    this.repository = sessionRepositories;
  }

  login(id: string, pw: string) {
    return this.repository.login(id, pw);
  }

}

export default SessionUseCase;