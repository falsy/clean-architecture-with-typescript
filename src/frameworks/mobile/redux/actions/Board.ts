import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'
import { GET_BOARD } from '@frameworks/mobile/redux/interfaces/iBoard'
import { IBoardAction, IBoardActions } from '@adapters/presenters/action-interfaces/iBoard'

class BoardActions implements IBoardActions {

  getBoards(boardEntityList: Array<IBoardEntity>): IBoardAction {
    return {
      type: GET_BOARD,
      payload: {
        list: boardEntityList
      }
    }
  }

}


export default BoardActions