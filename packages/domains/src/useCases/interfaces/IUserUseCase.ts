import { IUser } from "../../entities"

export default interface IUserUseCase {
  getUser(): Promise<IUser>
}
