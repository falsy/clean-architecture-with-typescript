import { ISessionPresenter } from '@adapters/presenters/interfaces/iSession';
import { ISessionUseCase } from '@domains/useCases/interfaces/iSession';
import { ILoginAction, ISessionActions } from '@frameworks/web/redux/interfaces/iSession';
import SessionVO from '@domains/vos/Session';

class SessionPresenter implements ISessionPresenter {

  private useCases: ISessionUseCase;
  private actions: ISessionActions;

  constructor(useCases: ISessionUseCase, actions: any) {
    this.useCases = useCases;
    this.actions = actions;
  }

  getToken(): string {
    return this.useCases.getToken();
  }

  setToken(token: string): ILoginAction {
    return this.actions.setToken(token);
  }

  async login(id: string, pw: string): Promise<ILoginAction> {
    const token: string = await this.useCases.login(new SessionVO({ id, pw }));
    return this.setToken(token);
  }

  removeToken() {
    this.useCases.removeToken();
    return this.setToken('');
  }

}

export default SessionPresenter;