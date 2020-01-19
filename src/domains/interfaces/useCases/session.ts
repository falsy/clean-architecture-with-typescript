import { LoginInformation } from '../vo/session';
import { TokenDTO } from "../infrastructures/remote";

export interface SessionUseCaseImpl {
  login(loginInfo: LoginInformation): Promise<TokenDTO>;
}