import SessionUseCase from '../../../domain/src/useCases/Session'
import UserDTO from '../../../domain/src/dto/UserDTO'

class SessionPresenter {

  constructor(
    private readonly useCases: SessionUseCase
  ) {}

  async login(id: string, pw: string): Promise<string> {
    return await this.useCases.login(new UserDTO({ id, pw }))
  }

  getToken(): Promise<string> {
    return this.useCases.getToken()
  }

  setToken(token: string): void {
    this.useCases.setToken(token)
  }

  removeToken(): void {
    this.useCases.removeToken()
  }

}

export default SessionPresenter