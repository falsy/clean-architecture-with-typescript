export interface IUserParams {
  id: string
  pw: string
}

export interface IUserDTO {
  readonly id: string
  readonly pw: string
}

class UserDTO implements IUserDTO {
  readonly id: string
  readonly pw: string

  constructor(param: IUserParams) {
    this.id = param.id
    this.pw = param.pw
  }
}

export default UserDTO