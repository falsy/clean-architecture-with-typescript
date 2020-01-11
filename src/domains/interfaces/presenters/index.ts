import { SessionPresenterImpl } from './session';
import { BoardPresenterImpl } from './board';

export default interface Presenters {
  session: SessionPresenterImpl;
  board: BoardPresenterImpl;
}