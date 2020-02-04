import { LoginInformation } from '../vos/session';
import { TokenDTO } from "../infrastructures/remote";

export interface SessionRepositoryImpl {
  login(LoginInfoVO: LoginInformation): Promise<TokenDTO>;
}