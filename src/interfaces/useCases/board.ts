import { IBoardDTO } from '../infrastructures/Remote';

export interface IBoardUseCase {
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}