import { LOGIN, ILoginAction, IToken, IReducer } from '@interfaces/frameworks/session';

const initState: IToken = {
  token: ''
};

const session: IReducer = (state = initState, action: ILoginAction): IToken => {
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

export default session;