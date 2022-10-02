import IUseCases from './interfaces/iUseCases'
import BoardPresenter from '@adapters/presenters/Board'
import SessionPresenter from '@adapters/presenters/Session'

export default (useCases: IUseCases) => {
  return {
    board: new BoardPresenter(useCases.board),
    session: new SessionPresenter(useCases.session)
  }
}