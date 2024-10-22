import { IUserUseCase } from "domains"
import { IUserPresenter } from "./index"

export default class UserPresenter implements IUserPresenter {
  private userUseCase: IUserUseCase

  constructor(userUseCase: IUserUseCase) {
    this.userUseCase = userUseCase
  }

  getUser() {
    return this.userUseCase.getUser()
  }
}
