import { IUserDTO, IUserRepository } from "domains"
import { IClientHTTP } from "../infrastructures"
import { UserDTO } from "../dtos"

export default class UserRepository implements IUserRepository {
  private client: IClientHTTP

  constructor(client: IClientHTTP) {
    this.client = client
  }

  async getUser(): Promise<IUserDTO> {
    try {
      const { data } = await this.client.get<IUserDTO>("/users")

      return new UserDTO(data)
    } catch (e) {
      console.error(e)
    }
  }
}
