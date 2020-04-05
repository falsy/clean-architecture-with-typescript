import { ISessionUseCase } from '@interfaces/useCases/session';
import { ISessionRepository } from '@interfaces/repositories/session';
import { ISessionVO } from '@interfaces/valueObjects/session';

class SessionUseCase implements ISessionUseCase {

  readonly repository: ISessionRepository;

  constructor(sessionRepositories: ISessionRepository) {
    this.repository = sessionRepositories;
  }

  async login(SessionVO: ISessionVO): Promise<string> {
    const { results: { token } } = await this.repository.login(SessionVO);
    this.repository.addToken(token);
    return token;
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