export const LOGIN = 'LOGIN';

interface Token {
  token: string
}

interface LoginAction {
  type: typeof LOGIN;
  payload: Token;
}

export interface SessionState {
  token: string
}

export type SessionActionTypes = LoginAction;

export type DispatchSession = (arg: LoginAction) => (LoginAction);

export interface SessionActionImpl {
  login(id: string, pw: string): void;
  useTokenSelector(): string;
}

export interface SessionStateGroup {
  session: SessionState
}