import IUserDTO from "domains/dtos/interfaces/IUserDTO"

export default class UserDTO implements IUserDTO {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly createdAt: string
  readonly updatedAt: string

  constructor(params: IUserDTO) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
