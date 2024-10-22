import { IUser, User } from "../entities"
import { IUserRepository } from "../repositories/interfaces"
import IUserUseCase from "./interfaces/IUserUseCase"

export default class UserUseCase implements IUserUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async getUser(): Promise<IUser> {
    const userInfo = await this.userRepository.getUser()

    return new User({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      createdAt: userInfo.createdAt,
      updatedAt: userInfo.updatedAt
    })
  }
}
