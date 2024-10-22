import { Inject, Injectable } from "@nestjs/common"
import { IUserRepository, UserUseCase as DomainUseCase } from "domains"

@Injectable()
export default class UserUseCase extends DomainUseCase {
  constructor(@Inject("IUserRepository") userRepository: IUserRepository) {
    super(userRepository)
  }
}
