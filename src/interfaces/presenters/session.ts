import { ITokenDTO } from '@interfacesinfrastructures/httpRequest';

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<ITokenDTO>;
  getToken(): string;
  removeToken(): void;
}