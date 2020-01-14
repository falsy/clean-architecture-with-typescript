import { BoardDTO } from '../infrastructures/Remote';

export interface BoardRepositoryImpl {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}