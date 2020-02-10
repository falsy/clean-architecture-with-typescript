import { BoardDTO } from '../infrastructures/httpRequest';

export interface IBoardUseCase {
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}