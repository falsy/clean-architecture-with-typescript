import { ISessionUseCase } from '@domains/useCases/interfaces/iSession';
import { ISessionRepository } from '@adapters/repositories/interfaces/iSession';
import { ISessionVO } from '@domains/vos/interfaces/iSession';

class SessionUseCase implements ISessionUseCase {

  readonly repository: ISessionRepository;

  constructor(sessionRepositories: ISessionRepository) {
    this.repository = sessionRepositories;
  }

  async login(SessionVO: ISessionVO): Promise<string> {
    const { results: { token }} = await this.repository.login(SessionVO);
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