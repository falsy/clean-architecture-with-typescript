import { useSelector } from "react-redux";
import { BoardData } from '../../../domains/interfaces/entities/board';

// Constants
const GET_BOARD = 'GET_BOARD';

// Interfaces
interface BoardList {
  list: Array<BoardData>
}
interface BoardAction {
  type: string;
  payload: BoardList;
}
interface BoardStateGroup {
  board: BoardList
}
type BoardActionTypes = BoardAction;

// Actions
export const setBoard = (list: Array<BoardData>) => {
  return {
    type: GET_BOARD,
    payload: {
      list
    }
  }
};
export const useBoardListSelector = () => {
  return useSelector((state: BoardStateGroup) => state.board.list);
}


// Reducer
const initState: BoardList = {
  list: []
};

export default function session(state = initState, action: BoardActionTypes): BoardList {
  switch (action.type) {
    case GET_BOARD:
      return {
        list: action.payload.list
      };
    default:
      return {
        ...state
      };
  }
};