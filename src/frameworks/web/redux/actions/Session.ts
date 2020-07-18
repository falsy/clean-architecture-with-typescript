import { ILoginAction, LOGIN } from '@frameworks/web/redux/interfaces/iSession';

class SessionActions {

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