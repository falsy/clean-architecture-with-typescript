import { ILoginInfo } from '../vos/session';
import { TokenDTO } from "../infrastructures/httpRequest";

export interface ISessionUseCase {
  login(loginInfo: ILoginInfo): Promise<TokenDTO>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}