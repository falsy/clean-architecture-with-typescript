import { ILoginAction } from "../action-interfaces/ISession";

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ILoginAction>;
  getToken(): string;
  removeToken(): void;
}