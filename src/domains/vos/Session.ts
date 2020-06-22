import { ISessionVO } from '@domains/vos/interfaces/iSession';

export default class SessionVO {
  readonly id: string;
  readonly pw: string;

  constructor(param: ISessionVO) {
    this.id = param.id;
    this.pw = param.pw;
  }
}