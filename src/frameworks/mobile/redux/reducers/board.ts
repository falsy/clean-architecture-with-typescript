import { GET_BOARD, IReducer } from '@frameworks/mobile/redux/interfaces/iBoard'
import { IBoardAction, IBoardList } from '@adapters/presenters/action-interfaces/iBoard'

const initState: IBoardList = {
  list: []
}

const board: IReducer = (state = initState, action: IBoardAction) => {
  switch (action.type) {
    case GET_BOARD:
      return {
        list: action.payload.list
      }
    default:
      return {
        ...state
      }
  }
}

export default board