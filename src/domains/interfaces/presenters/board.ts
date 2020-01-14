import { BoardDTO } from '../infrastructures/Remote';

export interface BoardPresenterImpl {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
};