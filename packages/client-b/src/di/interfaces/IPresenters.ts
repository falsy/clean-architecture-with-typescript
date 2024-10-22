import { IPostPresenter, IUserPresenter } from "adapters"

export default interface IPresenters {
  post: IPostPresenter
  user: IUserPresenter
}
