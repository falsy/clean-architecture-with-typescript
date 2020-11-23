import IUseCases from '@domains/useCases/interfaces/iUseCases'
import IActions from './action-interfaces'
import BoardPresenter from './Board'
import SessionPresenter from './Session'

export default (useCases: IUseCases, actions: IActions) => {
  return {
    board: new BoardPresenter(useCases.board, actions.board),
    session: new SessionPresenter(useCases.session, actions.session)
  }
}