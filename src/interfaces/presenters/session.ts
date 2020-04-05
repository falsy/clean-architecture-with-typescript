import { ILoginAction } from "@interfaces/frameworks/session";

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ILoginAction>;
  getToken(): string;
  removeToken(): void;
}