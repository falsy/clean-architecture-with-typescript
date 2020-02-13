import { IBoardDTO } from '../infrastructures/httpRequest';

export interface IBoardRepository {
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}