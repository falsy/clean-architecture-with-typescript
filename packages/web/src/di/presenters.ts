import BoardPresenter from '@adapter/presenters/Board'
import SessionPresenter from '@adapter/presenters/Session'

export default (useCases: any) => {
  return {
    session: new SessionPresenter(useCases.session),
    board: new BoardPresenter(useCases.board)
  }
}