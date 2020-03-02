import IBoardActions, { GET_BOARD, IBoardAction } from "@interfaces/frameworks/board";
import { IBoardPresenter } from "@interfaces/presenters/board";

class BoardActions implements IBoardActions {
  
  private readonly _presenter: IBoardPresenter;

  constructor(presenter: IBoardPresenter) {
    this._presenter = presenter;
  }

  async getBoards(): Promise<IBoardAction> {
    const boardEntityList = await this._presenter.getBoards();

    return {
      type: GET_BOARD,
      payload: {
        list: boardEntityList
      }
    }
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this._presenter.insertBoard(author, content);
  }

}

export default BoardActions;