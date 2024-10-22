import { IPostUseCase, IUserUseCase } from "domains"

export default interface IUseCases {
  post: IPostUseCase
  user: IUserUseCase
}
