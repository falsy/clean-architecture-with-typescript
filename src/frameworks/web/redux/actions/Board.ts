import { useSelector } from "react-redux";
import { IBoardData } from "@interfaces/entities/board";
import { GET_BOARD, IBoardAction, IBoardStateGroup } from "@interfaces/frameworks/board";

class BoardActions {
  
  private readonly _presenter: any;

  constructor(presenter: any) {
    this._presenter = presenter;
  }

  async getBoard(): Promise<IBoardAction> {
    const { results: { list } } = await this._presenter.getBoard();
    return {
      type: GET_BOARD,
      payload: {
        list
      }
    }
  }

  useBoardListSelector(): Array<IBoardData> {
    return useSelector((state: IBoardStateGroup) => state.board.list);
  }

}

export default BoardActions;