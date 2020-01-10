export interface LoginInformation {
  id: string;
  pw: string;
}

export default class LoginInfo {
  readonly id: string;
  readonly pw: string;

  constructor(param: LoginInformation) {
    this.id = param.id;
    this.pw = param.pw;
  }
}