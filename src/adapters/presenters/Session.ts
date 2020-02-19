import { ILoginAction, IReducer } from '@interfaces/frameworks/session';
import { ISessionPresenter } from '@interfaces/presenters/session';
import IUseCases from '@interfaces/useCases';
import useCase from '@domains/useCases/di';
import SessionVO from '@domains/vos/Session';
import IFrameworks from '@interfaces/frameworks';


class SessionPresenter implements ISessionPresenter {

  private useCases: IUseCases;
  private actions: IFrameworks;

  constructor(actions: IFrameworks) {
    this.useCases = useCase;
    this.actions = actions;
  }

  async login(id: string, pw: string): Promise<ILoginAction> {
    const { results: { token } } = await this.useCases.session.login(new SessionVO({ id, pw }));
    this.addToken(token);
    return this.actions.session.setToken(token);
  }

  getToken(): string {
    return this.useCases.session.getToken();
  }

  addToken(token: string): ILoginAction {
    this.useCases.session.addToken(token);
    return this.actions.session.setToken(token);
  }

  removeToken(): ILoginAction {
    this.useCases.session.removeToken();
    return this.actions.session.setToken('');
  }

  useTokenSelector(): string {
    return this.actions.session.useTokenSelector();
  }

  reducer(): IReducer {
    return this.actions.session.reducer();
  }

}


export default SessionPresenter;