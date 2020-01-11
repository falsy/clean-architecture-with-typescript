import { useSelector } from "react-redux";
import { GET_BOARD, BoardActionImpl, DispatchBoard, BoardStateGroup } from '../../../domains/interfaces/frameworks/board';
import { BoardPresenterImpl } from '../../../domains/interfaces/presenters/board';

class BoardAction implements BoardActionImpl {

  readonly presenter: BoardPresenterImpl

  constructor(presenter: BoardPresenterImpl) {
    this.presenter = presenter;
  }

  getBoard() {
    return async (dispatch: DispatchBoard) => {
      const { results } = await this.presenter.getBoard();
      dispatch({
        type: GET_BOARD,
        payload: {
          list: results.list
        }
      });
    }
  }

  useBoardListSelector() {
    return useSelector((state: BoardStateGroup) => state.board.list);
  }

}

export default BoardAction;