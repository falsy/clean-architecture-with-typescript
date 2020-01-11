export const LOGIN = 'LOGIN';

export interface Token {
  token: string
}

interface LoginAction {
  type: string;
  payload: Token;
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
  session: Token
}