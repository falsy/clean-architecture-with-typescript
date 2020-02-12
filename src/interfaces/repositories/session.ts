import { ILoginInfo } from '../vos/session';
import { ITokenDTO } from "../infrastructures/httpRequest";

export interface ISessionRepository {
  login(LoginInfoVO: ILoginInfo): Promise<ITokenDTO>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}