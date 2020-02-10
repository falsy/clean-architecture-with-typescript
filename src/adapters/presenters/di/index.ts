import BoardPresenter from '../Board';
import SessionPresenter from '../Session';
import Frameworks from '../../../frameworks/web/redux';

export default {
  board: new BoardPresenter(Frameworks),
  session: new SessionPresenter(Frameworks)
}