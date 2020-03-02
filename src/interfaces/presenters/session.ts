export interface ISessionPresenter {
  login(id: string, pw: string): Promise<string>;
  getToken(): string;
  removeToken(): void;
}