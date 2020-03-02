import { IBoardEntity } from '@interfacesentities/board';

export interface IBoardPresenter {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<number>;
}