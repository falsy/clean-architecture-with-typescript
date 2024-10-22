import { Controller, Get } from "@nestjs/common"
import { IUser } from "domains"
import { UserPresenter } from "adapters"
import UserUseCase from "../useCases/UserUseCase"

@Controller("")
export default class UserController extends UserPresenter {
  constructor(userUseCase: UserUseCase) {
    super(userUseCase)
  }

  @Get("user")
  getUser(): Promise<IUser> {
    return super.getUser()
  }
}
