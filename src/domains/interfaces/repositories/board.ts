import { BoardDTO } from '../infrastructures/remote';

export interface BoardRepositoryImpl {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}