import { IBoardDTO } from '../infrastructures/httpRequest';

export interface IBoardUseCase {
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}