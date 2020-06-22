import { IBoardAction } from '@frameworks/web/redux/interfaces/iBoard';

export interface IBoardPresenter {
  getBoards(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<number>;
}