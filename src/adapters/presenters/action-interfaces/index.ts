import { IBoardActions } from "./iBoard"
import { ISessionActions } from "./iSession"

export default interface IActions {
  session: ISessionActions
  board: IBoardActions
}