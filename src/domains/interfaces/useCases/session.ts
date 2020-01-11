import { LoginInformation } from '../../vo/LoginInfo';
import { TokenDTO } from "../infrastructures/Remote";

export interface SessionUseCaseImpl {
  login(loginInfo: LoginInformation): Promise<TokenDTO>;
}