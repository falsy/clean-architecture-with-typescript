import { BoardDTO } from '../infrastructures/httpRequest';

export interface IBoardRepository {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}