import { BoardDTO } from '../infrastructures/remote';

export interface BoardUseCaseImpl {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}