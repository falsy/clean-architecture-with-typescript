import { IBoardEntity } from '@interfaces/entities/board';

export interface IBoardPresenter {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<number>;
}