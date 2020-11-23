import { ILoginAction } from "../action-interfaces/iSession"

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ILoginAction>
  getToken(): string
  setToken(token: string): ILoginAction
  removeToken(): ILoginAction
}