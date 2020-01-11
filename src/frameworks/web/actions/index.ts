import SessionAction from './Session';
import BoardAction from './Board';

export default (presneters: any) => {
  return {
    session: new SessionAction(presneters.session),
    board: new BoardAction(presneters.board)
  };
};