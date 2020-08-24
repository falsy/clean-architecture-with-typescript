import { IBoardAction } from '../action-interfaces/IBoard';

export interface IBoardPresenter {
  getBoards(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<number>;
}