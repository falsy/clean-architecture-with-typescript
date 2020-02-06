import { SessionRepositoryImpl } from './session';
import { BoardRepositoryImpl } from './board';

export default interface Repositories {
  session: SessionRepositoryImpl;
  board: BoardRepositoryImpl;
}