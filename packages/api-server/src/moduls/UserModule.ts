import { Module } from "@nestjs/common"
import UserRepository from "../repositories/UserRepository"
import UserUseCase from "../useCases/UserUseCase"
import UserController from "../controllers/UserController"

@Module({
  imports: [],
  providers: [
    {
      provide: "IUserRepository",
      useClass: UserRepository
    },
    UserUseCase
  ],
  controllers: [UserController]
})
export default class UserModule {}
