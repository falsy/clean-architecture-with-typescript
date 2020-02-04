import { useSelector } from "react-redux";

// Constants
const LOGIN = 'LOGIN';

// Interfaces
interface Token {
  token: string
}
interface LoginAction {
  type: string;
  payload: Token;
}
interface SessionStateGroup {
  session: Token
}
type SessionActionTypes = LoginAction;

// Actions
export const setToken = (token: string) => {
  return {
    type: LOGIN,
    payload: {
      token
    }
  }
};
export const useTokenSelector = () => {
  return useSelector((state: SessionStateGroup) => state.session.token);
}

// Reducer
const initState: Token = {
  token: ''
};

export default function session(state = initState, action: SessionActionTypes): Token {
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