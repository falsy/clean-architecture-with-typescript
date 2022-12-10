import BoardPresenter from 'adapter/src/presenters/Board'
import SessionPresenter from 'adapter/src/presenters/Session'
import { IUseCases } from './useCases'

export interface IPresenters {
  session: SessionPresenter
  board: BoardPresenter
}

export default (useCases: IUseCases): IPresenters => {
  return {
    session: new SessionPresenter(useCases.session),
    board: new BoardPresenter(useCases.board)
  }
}