export interface ISessionPresenter {
  login(id: string, pw: string): Promise<string>
  getToken(): Promise<string>
  setToken(token: string): void
  removeToken(): void
}