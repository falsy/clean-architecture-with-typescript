import { ILoginAction, LOGIN, ISessionActions } from '@frameworks/web/redux/interfaces/iSession';

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