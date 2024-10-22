import { IUser } from "domains"

export default interface IUserPresenter {
  getUser(): Promise<IUser>
}
