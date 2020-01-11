import { useSelector } from "react-redux";
import { LOGIN, SessionStateGroup, DispatchSession, SessionActionImpl } from '../../../domains/interfaces/frameworks/session';
import { SessionPresenterImpl } from '../../../domains/interfaces/presenters/session';


class SessionAction implements SessionActionImpl {

  readonly presenter: SessionPresenterImpl

  constructor(presenter: SessionPresenterImpl) {
    this.presenter = presenter;
  }

  login(id: string, pw: string) {
    return async (dispatch: DispatchSession) => {
      const { results } = await this.presenter.login(id, pw);
      window.sessionStorage.setItem('token', results.token);
      dispatch({
        type: LOGIN,
        payload: {
          token: results.token
        }
      });
    }
  }

  setToken(token: string) {
    window.sessionStorage.setItem('token', token);
    return {
      type: LOGIN,
      payload: {
        token
      }
    };
  }

  logout() {
    window.sessionStorage.removeItem('token');
    return {
      type: LOGIN,
      payload: {
        token: ''
      }
    }
  }

  useTokenSelector() {
    return useSelector((state: SessionStateGroup) => state.session.token);
  }

}

export default SessionAction;