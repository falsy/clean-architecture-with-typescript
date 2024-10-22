import { Injectable } from "@nestjs/common"
import { IUser, IUserDTO, IUserRepository, User } from "domains"
import { UserDTO } from "adapters"

@Injectable()
export default class UserRepository implements IUserRepository {
  private user: IUser = new User({
    id: "1",
    name: "sample",
    email: "sample@email.com",
    createdAt: new Date(),
    updatedAt: new Date()
  })

  getUser(): Promise<IUserDTO> {
    return new Promise((resolve) => {
      resolve(
        new UserDTO({
          id: this.user.id,
          name: this.user.name,
          email: this.user.email,
          createdAt: this.user.createdAt,
          updatedAt: this.user.updatedAt
        })
      )
    })
  }
}
