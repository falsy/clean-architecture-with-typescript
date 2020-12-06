import { IBoardActions } from "@adapters/presenters/action-interfaces/iBoard"
import { ISessionActions } from "@adapters/presenters/action-interfaces/iSession"

export default interface IActions {
  session: ISessionActions
  board: IBoardActions
}