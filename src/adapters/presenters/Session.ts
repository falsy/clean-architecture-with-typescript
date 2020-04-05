import { ISessionPresenter } from '@interfaces/presenters/session';
import SessionVO from '@domains/vos/Session';
import { ISessionUseCase } from '@interfaces/useCases/session';
import { ILoginAction, LOGIN } from '@interfaces/frameworks/session';

class SessionPresenter implements ISessionPresenter {

  private useCases: ISessionUseCase;

  constructor(useCases: ISessionUseCase) {
    this.useCases = useCases;
  }

  async login(id: string, pw: string): Promise<ILoginAction> {
    const token: string = await this.useCases.login(new SessionVO({ id, pw }));

    return {
      type: LOGIN,
      payload: {
        token
      }
    }
  }

  getToken(): string {
    return this.useCases.getToken();
  }

  setToken(token: string): ILoginAction {
    return {
      type: LOGIN,
      payload: {
        token
      }
    }
  }

  removeToken() {
    this.useCases.removeToken();
    return this.setToken('');
  }

}


export default SessionPresenter;