import BoardActions from './Board'
import SessionActions from './Session'

export default () => {
  return {
    board: new BoardActions(),
    session: new SessionActions()
  }
}