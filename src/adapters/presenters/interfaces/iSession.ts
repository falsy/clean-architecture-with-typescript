import { ILoginAction } from "@frameworks/web/redux/interfaces/iSession";

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ILoginAction>;
  getToken(): string;
  removeToken(): void;
}