
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

export default interface ISessionActions {
  login(id: string, pw: string): Promise<ILoginAction>;
  getToken(): string;
  setToken(token: string): ILoginAction;
  removeToken(): ILoginAction;
}