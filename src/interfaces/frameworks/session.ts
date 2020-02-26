
export const LOGIN = 'LOGIN';

export interface IToken {
  token: string;
}

export interface ILoginAction {
  type: string;
  payload: IToken;
}

export interface ISessionStateGroup {
  session: IToken;
}

export interface IReducer {
  (state: IToken, action: ILoginAction): IToken;
}

export interface ISession {
  setToken(token: string): ILoginAction;
  useTokenSelector(): string;
  reducer(): IReducer;
}