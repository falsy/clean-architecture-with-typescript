import IUserRepository from "domains/repositories/interfaces/IUserRepository"
import IUserDTO from "domains/dtos/interfaces/IUserDTO"
import { IClientHTTP } from "../infrastructures/interfaces/IClientHTTP"
import UserDTO from "../dtos/UserDTO"

export default class UserRepository implements IUserRepository {
  private client: IClientHTTP

  constructor(client: IClientHTTP) {
    this.client = client
  }

  async getUser(): Promise<IUserDTO> {
    try {
      const { data } = await this.client.get<IUserDTO>("/api/users")

      return new UserDTO(data)
    } catch (e) {
      console.error(e)
    }
  }
}
