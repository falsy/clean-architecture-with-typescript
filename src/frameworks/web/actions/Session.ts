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
      const token = await this.presenter.login(id, pw);
      dispatch({
        type: LOGIN,
        payload: {
          token
        }
      });
    }
  }

  useTokenSelector() {
    return useSelector((state: SessionStateGroup) => state.session.token);
  }
  
}

export default SessionAction;