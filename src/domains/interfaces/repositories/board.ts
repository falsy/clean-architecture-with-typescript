import { BoardDTO } from '../infrastructures/Remote';

export interface BoardRepositoryImpl {
  getBoard(): Promise<BoardDTO>;
}