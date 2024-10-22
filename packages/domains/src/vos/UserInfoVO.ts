import IUserInfoVO, { IUserInfoVOParams } from "./interfaces/IUserInfoVO"

export default class UserInfoVO implements IUserInfoVO {
  readonly userId: string
  readonly userName: string

  constructor(params: IUserInfoVOParams) {
    this.userId = params.userId
    this.userName = params.userName
  }
}
