import { LOGIN } from "../../../constants";

interface Token {
  token: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: Token;
}

export interface SessionState {
  token: string;
}

export type SessionActionTypes = LoginAction;

export type DispatchSession = (arg: LoginAction) => LoginAction;

export interface SessionPresenterImpl {
  login(id: string, pw: string): Promise<string>;
}
