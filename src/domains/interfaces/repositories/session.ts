import { LoginInformation } from '../vo/session';
import { TokenDTO } from "../infrastructures/Remote";

export interface SessionRepositoryImpl {
  login(LoginInfoVO: LoginInformation): Promise<TokenDTO>;
}