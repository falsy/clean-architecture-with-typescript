import { ILoginInfo } from '../vos/session';
import { ITokenDTO } from "../infrastructures/httpRequest";

export interface ISessionUseCase {
  login(loginInfo: ILoginInfo): Promise<ITokenDTO>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}