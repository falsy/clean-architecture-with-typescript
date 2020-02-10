import { useSelector, TypedUseSelectorHook } from "react-redux";
import { IBoardData } from '@interfaces/entities/board';
import { IBoardList, IBoardAction, IBoardStateGroup, IBoard } from '@interfaces/frameworks/board';

const GET_BOARD = 'GET_BOARD';

class Board implements IBoard {

  private initState: IBoardList;
  private useSelector: TypedUseSelectorHook<IBoardStateGroup>;

  constructor() {
    this.initState = {
      list: []
    };
    this.useSelector = useSelector;
  }
  
  setBoard(list: Array<IBoardData>) {
    return {
      type: GET_BOARD,
      payload: {
        list
      }
    }
  }

  useBoardListSelector(): Array<IBoardData> {
    return this.useSelector((state: IBoardStateGroup) => state.board.list);
  }

  reducer() {
    const initState = this.initState;
    return (state = initState, action: IBoardAction): IBoardList => {
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
    }
  }
}

export default Board;