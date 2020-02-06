import { ILoginInfo } from '../vos/session';
import { TokenDTO } from "../infrastructures/httpRequest";

export interface ISessionRepository {
  login(LoginInfoVO: ILoginInfo): Promise<TokenDTO>;
}