import IUserInfoVO from "./interfaces/IUserInfoVO"

export default class UserInfoVO implements IUserInfoVO {
  readonly userId: string
  readonly userName: string

  constructor(userId: string, userName: string) {
    this.userId = userId
    this.userName = userName
  }
}
