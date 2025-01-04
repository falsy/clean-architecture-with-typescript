import IUser from "domains/entities/interfaces/IUser"

export default interface IUserPresenter {
  getUser(): Promise<IUser>
}
