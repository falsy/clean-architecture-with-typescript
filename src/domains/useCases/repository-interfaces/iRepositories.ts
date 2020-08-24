import { ISessionRepository } from './iSession';
import { IBoardRepository } from './iBoard';

export default interface IRepositories {
  session: ISessionRepository;
  board: IBoardRepository;
}