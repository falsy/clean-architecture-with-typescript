import { IUserDTO } from "../../dtos/interfaces"

export default interface IUserRepository {
  getUser(): Promise<IUserDTO>
}
