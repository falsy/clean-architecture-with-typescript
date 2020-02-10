import { ISessionRepository } from './session';
import { IBoardRepository } from './board';

export default interface Repositories {
  session: ISessionRepository;
  board: IBoardRepository;
}