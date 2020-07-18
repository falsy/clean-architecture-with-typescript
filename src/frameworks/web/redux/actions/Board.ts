import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard';
import { IBoardAction, GET_BOARD } from '@frameworks/web/redux/interfaces/iBoard';

class BoardActions {

  async getBoards(boardEntityList: Array<IBoardEntity>): Promise<IBoardAction> {
    return {
      type: GET_BOARD,
      payload: {
        list: boardEntityList
      }
    }
  }

}


export default BoardActions;