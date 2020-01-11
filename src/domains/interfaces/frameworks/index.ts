import { SessionActionImpl } from './session';
import { BoardActionImpl } from './board';

export default interface Actions {
  session: SessionActionImpl
  board: BoardActionImpl
}