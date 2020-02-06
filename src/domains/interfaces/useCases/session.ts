import { LoginInformation } from '../vos/session';
import { TokenDTO } from "../infrastructures/remote";

export interface SessionUseCaseImpl {
  login(loginInfo: LoginInformation): Promise<TokenDTO>;
}