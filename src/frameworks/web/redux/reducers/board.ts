import { GET_BOARD, IBoardList, IBoardAction, IReducer } from '@interfaces/frameworks/board';

const initState: IBoardList = {
  list: []
};

const board: IReducer = (state = initState, action: IBoardAction) => {
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

export default board;