import BoardPresenter from 'adapter/src/presenters/Board'
import SessionPresenter from 'adapter/src/presenters/Session'

export default (useCases: any) => {
  return {
    session: new SessionPresenter(useCases.session),
    board: new BoardPresenter(useCases.board)
  }
}