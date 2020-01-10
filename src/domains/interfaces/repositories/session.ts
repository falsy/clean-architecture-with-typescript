import { LoginInformation } from '../../vo/LoginInfo';

export interface SessionRepositoryImpl {
  login(LoginInfoVO: LoginInformation): Promise<string>
}