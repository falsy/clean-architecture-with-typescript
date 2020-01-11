import { GET_BOARD, List, BoardActionTypes } from '../../../domains/interfaces/frameworks/board';

const initState: List = {
  list: []
};

export default function session(state = initState, action: BoardActionTypes): List {
  switch (action.type) {
    case GET_BOARD:
      return {
        ...state,
        list: action.payload.list
      };
    default:
      return {
        ...state
      };
  }
}