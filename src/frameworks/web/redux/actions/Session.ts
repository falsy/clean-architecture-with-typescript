import { LOGIN } from '@frameworks/web/redux/interfaces/iSession';
import { ILoginAction, ISessionActions } from '@adapters/presenters/action-interfaces/ISession';

class SessionActions implements ISessionActions {

  setToken(token: string): ILoginAction {
    return {
      type: LOGIN,
      payload: {
        token
      }
    }
  }

}


export default SessionActions;