import { IUser } from "../../entities"

export default interface IUserUseCase {
  getUserInfo(): Promise<IUser>
}
