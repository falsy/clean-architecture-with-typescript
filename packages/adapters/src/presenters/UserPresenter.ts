import IUserPresenter from "./interfaces/IUserPresenter"
import IUserUseCase from "domains/useCases/interfaces/IUserUseCase"

export default class UserPresenter implements IUserPresenter {
  private userUseCase: IUserUseCase

  constructor(userUseCase: IUserUseCase) {
    this.userUseCase = userUseCase
  }

  getUser() {
    return this.userUseCase.getUser()
  }
}
