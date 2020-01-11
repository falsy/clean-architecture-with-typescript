import { LOGIN, Token, SessionActionTypes } from '../../../domains/interfaces/frameworks/session';

const initState: Token = {
  token: ''
};

export default function session(state = initState, action: SessionActionTypes): Token {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token
      };
    default:
      return {
        ...state
      };
  }
}