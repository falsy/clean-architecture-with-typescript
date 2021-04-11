import { ISessionPresenter } from '@adapters/presenters/interfaces/iSession'
import { IBoardPresenter } from '@adapters/presenters/interfaces/iBoard'

export default interface IPresenters {
  session: ISessionPresenter
  board: IBoardPresenter
}