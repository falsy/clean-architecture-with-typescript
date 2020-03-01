import { IBoardDTO } from '@interfaces/infrastructures/Remote';

export interface IBoardPresenter {
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}