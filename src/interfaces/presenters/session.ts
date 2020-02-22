import { ILoginAction, IReducer } from '@interfaces/frameworks/session';

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ILoginAction>;
  getToken(): string;
  addToken(token: string): ILoginAction;
  removeToken(): ILoginAction;
  useTokenSelector(): string;
  reducer(): IReducer;
}