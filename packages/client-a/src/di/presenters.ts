import { PostPresenter, UserPresenter } from "adapters"
import IPresenters from "./interfaces/IPresenters"
import IUseCases from "./interfaces/IUseCases"

export default (useCases: IUseCases): IPresenters => {
  return {
    post: new PostPresenter(useCases.post),
    user: new UserPresenter(useCases.user)
  }
}
