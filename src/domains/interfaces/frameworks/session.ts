export const LOGIN = 'LOGIN';

interface Token {
  token: string
}

interface LoginAction {
  type: string;
  payload: Token;
}

export interface SessionState {
  token: string
}

export type SessionActionTypes = LoginAction;

export type DispatchSession = (arg: LoginAction) => (LoginAction);

export interface SessionActionImpl {
  login(id: string, pw: string): void;
  setToken(token: string): LoginAction;
  useTokenSelector(): string;
  logout(): LoginAction;
}

export interface SessionStateGroup {
  session: SessionState
}