import { IBoardDTO } from '../infrastructures/Remote';

export interface IBoardRepository {
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}