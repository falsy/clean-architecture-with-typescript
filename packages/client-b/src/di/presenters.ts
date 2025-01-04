import PostPresenter from "adapters/presenters/PostPresenter"
import UserPresenter from "adapters/presenters/UserPresenter"
import IPresenters from "./interfaces/IPresenters"
import IUseCases from "./interfaces/IUseCases"

export default (useCases: IUseCases): IPresenters => {
  return {
    post: new PostPresenter(useCases.post),
    user: new UserPresenter(useCases.user)
  }
}
