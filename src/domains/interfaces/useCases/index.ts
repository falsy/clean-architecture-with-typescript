import { SessionUseCaseImpl } from './session';
import { BoardUseCaseImpl } from './board';

export default interface UseCases {
  session: SessionUseCaseImpl;
  board: BoardUseCaseImpl;
}