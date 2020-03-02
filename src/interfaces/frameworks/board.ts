import { IBoardData } from '@interfaces/entities/board';

export const GET_BOARD = 'GET_BOARD';

export interface IBoardList {
  list: Array<IBoardData>
}

export interface IBoardAction {
  type: string;
  payload: IBoardList;
}

export interface IBoardStateGroup {
  board: IBoardList
}

export interface IReducer {
  (state: IBoardList, action: IBoardAction): IBoardList
}


export default interface IBoardActions {
  getBoards(): Promise<IBoardAction>;
  insertBoard(author: string, content: string): Promise<number>;
}