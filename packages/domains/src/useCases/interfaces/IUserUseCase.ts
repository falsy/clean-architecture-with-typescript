import IUser from "domains/entities/interfaces/IUser"

export default interface IUserUseCase {
  getUser(): Promise<IUser>
}
