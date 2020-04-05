import { IBoardAction } from '@interfaces/frameworks/board';

export interface IBoardPresenter {
  getBoards(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<number>;
}