import { LOGIN } from '@frameworks/mobile/redux/interfaces/iSession'
import { ILoginAction, ISessionActions } from '@adapters/presenters/action-interfaces/iSession'

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


export default SessionActions