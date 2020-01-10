import { LoginInformation } from '../../vo/LoginInfo';

export interface RemoteInfrastructureImpl {
  login(LoginInfoVO: LoginInformation): Promise<string>
}