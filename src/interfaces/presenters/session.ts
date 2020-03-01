import { ITokenDTO } from '@interfaces/infrastructures/Remote';

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ITokenDTO>;
  getToken(): string;
  removeToken(): void;
}