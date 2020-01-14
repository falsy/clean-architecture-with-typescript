import { BoardDTO } from '../infrastructures/Remote';

export interface BoardUseCaseImpl {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}