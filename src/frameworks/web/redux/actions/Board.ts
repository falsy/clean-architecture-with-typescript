import { useSelector } from "react-redux";
import { IBoardData } from "@interfaces/entities/board";
import { GET_BOARD, IBoardAction, IBoardStateGroup } from "@interfaces/frameworks/board";

class BoardActions {
  
  private readonly _presenter: any;

  constructor(presenter: any) {
    this._presenter = presenter;
  }

  async getBoards(): Promise<IBoardAction> {
    const boardEntityList = await this._presenter.getBoards();
    console.log(boardEntityList);
    return {
      type: GET_BOARD,
      payload: {
        list: boardEntityList
      }
    }
  }

  useBoardListSelector(): Array<IBoardData> {
    return useSelector((state: IBoardStateGroup) => state.board.list);
  }

}

export default BoardActions;