import { LoginInformation } from '../../vo/LoginInfo';

export interface SessionUseCaseImpl {
  login(loginInfo: LoginInformation): Promise<string>
}