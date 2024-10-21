import { IUserDTO } from "../../dtos/interfaces"

export default interface IUserRepository {
  getUserInfo(): Promise<IUserDTO>
}
