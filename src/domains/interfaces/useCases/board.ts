import { BoardDTO } from '../infrastructures/Remote';

export interface BoardUseCaseImpl {
  getBoard(): Promise<BoardDTO>;
}