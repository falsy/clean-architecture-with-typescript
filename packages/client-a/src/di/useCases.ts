import PostUseCase from "domains/useCases/PostUseCase"
import UserUseCase from "domains/useCases/UserUseCase"
import IRepositories from "./interfaces/IRepositories"
import IUseCases from "./interfaces/IUseCases"

export default (repository: IRepositories): IUseCases => {
  return {
    post: new PostUseCase(repository.post, repository.comment),
    user: new UserUseCase(repository.user)
  }
}
