import ISessionActions, { LOGIN, ILoginAction } from "@interfaces/frameworks/session";
import { ISessionPresenter } from "@interfaces/presenters/session";

class SessionActions implements ISessionActions {
  
  private readonly _presenter: ISessionPresenter;

  constructor(presenter: ISessionPresenter) {
    this._presenter = presenter;
  }

  async login(id: string, pw: string): Promise<ILoginAction> {
    const token: string = await this._presenter.login(id, pw);
    return {
      type: LOGIN,
      payload: {
        token
      }
    }
  }

  getToken(): string {
    return this._presenter.getToken();
  }

  setToken(token: string): ILoginAction {
    return {
      type: LOGIN,
      payload: {
        token
      }
    }
  }

  removeToken(): ILoginAction {
    this._presenter.removeToken();
    return this.setToken('');
  }

}

export default SessionActions;