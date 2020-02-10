import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ISessionStateGroup, ILoginAction, IToken } from '@interfaces/frameworks/session';


const LOGIN = 'LOGIN';

class Session {

  private initState: IToken;
  private useSelector: TypedUseSelectorHook<ISessionStateGroup>;

  constructor() {
    this.initState = {
      token: ''
    };
    this.useSelector = useSelector;
  }

  setToken(token: string): ILoginAction {
    return {
      type: LOGIN,
      payload: {
        token
      }
    }
  };

  useTokenSelector(): string {
    return this.useSelector((state: ISessionStateGroup) => state.session.token);
  }

  reducer() {
    const initState = this.initState;
    return (state = initState, action: ILoginAction): IToken => {
      switch (action.type) {
        case LOGIN:
          return {
            token: action.payload.token
          };
        default:
          return {
            ...state
          };
      }
    }
  }
}


export default Session;