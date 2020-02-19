import { IBoardData } from '@interfaces/entities/board';
import { IBoardAction, IReducer } from '@interfaces/frameworks/board';

export interface IBoardPresenter {
  getBoard(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<number>;
  useBoardListSelector(): Array<IBoardData>;
  reducer(): IReducer;
}