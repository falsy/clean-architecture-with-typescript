import IUseCases from './interfaces/iUseCases'
import IActions from './interfaces/iActions'
import BoardPresenter from '@adapters/presenters/Board'
import SessionPresenter from '@adapters/presenters/Session'

export default (useCases: IUseCases, actions: IActions) => {
  return {
    board: new BoardPresenter(useCases.board, actions.board),
    session: new SessionPresenter(useCases.session, actions.session)
  }
}