import IUser, { IUserParams } from "./interfaces/IUser"

export default class User implements IUser {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(params: IUserParams) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
    this.createdAt = new Date(params.createdAt)
    this.updatedAt = new Date(params.updatedAt)
  }
}
