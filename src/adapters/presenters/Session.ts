import { ISessionPresenter } from '@adapters/presenters/interfaces/iSession';
import { ISessionUseCase } from '@domains/useCases/interfaces/iSession';
import SessionVO from '@domains/vos/Session';
import { ISessionActions, ILoginAction } from './action-interfaces/ISession';

class SessionPresenter implements ISessionPresenter {

  private useCases: ISessionUseCase;
  private actions: ISessionActions;

  constructor(useCases: ISessionUseCase, actions: ISessionActions) {
    this.useCases = useCases;
    this.actions = actions;
  }

  async login(id: string, pw: string): Promise<ILoginAction> {
    const token = await this.useCases.login(new SessionVO({ id, pw }));
    return this.setToken(token);
  }

  getToken(): string {
    return this.useCases.getToken();
  }

  setToken(token: string): ILoginAction {
    return this.actions.setToken(token);
  }

  removeToken() {
    this.useCases.removeToken();
    return this.setToken('');
  }

}

export default SessionPresenter;