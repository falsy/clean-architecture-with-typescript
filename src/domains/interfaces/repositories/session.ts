import { LoginInformation } from '../vo/session';
import { TokenDTO } from "../infrastructures/remote";

export interface SessionRepositoryImpl {
  login(LoginInfoVO: LoginInformation): Promise<TokenDTO>;
}