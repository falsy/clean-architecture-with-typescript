import { LoginInformation } from '../../vo/LoginInfo';
import { TokenDTO } from "../infrastructures/Remote";

export interface SessionRepositoryImpl {
  login(LoginInfoVO: LoginInformation): Promise<TokenDTO>;
}