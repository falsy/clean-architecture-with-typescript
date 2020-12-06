import IActions from './interfaces/iActions'
import BoardActions from '../redux/actions/Board'
import SessionActions from '../redux/actions/Session'

export default (): IActions => {
  return {
    board: new BoardActions(),
    session: new SessionActions()
  }
}