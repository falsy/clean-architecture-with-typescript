import IBoardActions, { GET_BOARD, IBoardAction, IBoardStateGroup } from "@interfaces/frameworks/board";

class BoardActions implements IBoardActions {
  
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

  insertBoard(author: string, content: string): Promise<number> {
    return this._presenter.insertBoard(author, content);
  }

}

export default BoardActions;