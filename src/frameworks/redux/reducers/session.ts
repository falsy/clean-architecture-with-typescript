import { LOGIN } from "../../../constants";
import {
  SessionState,
  SessionActionTypes
} from "../../../domains/interfaces/presenters/session";

const initState: SessionState = {
  token: ""
};

export default function session(
  state = initState,
  action: SessionActionTypes
): SessionState {
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
