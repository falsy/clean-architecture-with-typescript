import { BoardData } from '../../interfaces/entities/board';

export const GET_BOARD = 'GET_BOARD';

export interface List {
  list: Array<BoardData>
}

interface BoardAction {
  type: string;
  payload: List;
}

export type BoardActionTypes = BoardAction;

export type DispatchBoard = (arg: BoardAction) => (BoardAction);

export interface BoardActionImpl {
  getBoard(): void,
  useBoardListSelector(): Array<BoardData>
}

export interface BoardStateGroup {
  board: List
}