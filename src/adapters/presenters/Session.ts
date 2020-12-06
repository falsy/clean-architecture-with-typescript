import UserDTO from '@domains/dto/UserDTO'
import { ISessionUseCase } from '@domains/useCases/interfaces/iSession'
import { ISessionPresenter } from '@adapters/presenters/interfaces/iSession'
import { ISessionActions, ILoginAction } from './action-interfaces/iSession'

class SessionPresenter implements ISessionPresenter {

  constructor(
    private readonly useCases: ISessionUseCase, 
    private readonly actions: ISessionActions
  ) {}

  async login(id: string, pw: string): Promise<ILoginAction> {
    const token = await this.useCases.login(new UserDTO({ id, pw }))
    return this.setToken(token)
  }

  getToken(): Promise<string> {
    return this.useCases.getToken()
  }

  setToken(token: string): ILoginAction {
    return this.actions.setToken(token)
  }

  removeToken(): ILoginAction {
    this.useCases.removeToken()
    return this.setToken('')
  }

}

export default SessionPresenter