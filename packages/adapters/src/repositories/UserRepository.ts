import { IUserDTO, IUserRepository } from "domains"
import { ClientHTTP } from "../infrastructures"
import { UserDTO } from "../dtos"

export default class UserRepository implements IUserRepository {
  private client: ClientHTTP

  constructor() {
    this.client = new ClientHTTP("http://localhost:2000")
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
