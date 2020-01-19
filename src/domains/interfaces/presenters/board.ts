import { BoardDTO } from '../infrastructures/remote';

export interface BoardPresenterImpl {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
};