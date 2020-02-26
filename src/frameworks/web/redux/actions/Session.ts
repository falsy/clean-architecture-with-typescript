import { useSelector } from "react-redux";
import { LOGIN, ILoginAction, ISessionStateGroup } from "@interfaces/frameworks/session";

class SessionActions {
  private readonly _presenter: any;

  constructor(presenter: any) {
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

  removeToken(): void {
    this._presenter.removeToken();
    this.setToken('');
  }

  useTokenSelector(): string {
    return useSelector((state: ISessionStateGroup) => state.session.token);
  }

}

export default SessionActions;