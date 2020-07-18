import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard';
import { IBoardAction, GET_BOARD, IBoardActions } from '@frameworks/web/redux/interfaces/iBoard';

class BoardActions implements IBoardActions {

  getBoards(boardEntityList: Array<IBoardEntity>): IBoardAction {
    return {
      type: GET_BOARD,
      payload: {
        list: boardEntityList
      }
    };
  }

}


export default BoardActions;