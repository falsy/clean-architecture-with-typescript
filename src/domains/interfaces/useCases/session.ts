import { LoginInformation } from '../vo/session';
import { TokenDTO } from "../infrastructures/Remote";

export interface SessionUseCaseImpl {
  login(loginInfo: LoginInformation): Promise<TokenDTO>;
}