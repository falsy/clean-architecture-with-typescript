export default interface IUser {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface IUserParams {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly createdAt: Date
  readonly updatedAt: Date
}
