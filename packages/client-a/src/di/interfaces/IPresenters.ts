import IPostPresenter from "adapters/presenters/interfaces/IPostPresenter"
import IUserPresenter from "adapters/presenters/interfaces/IUserPresenter"

export default interface IPresenters {
  post: IPostPresenter
  user: IUserPresenter
}
