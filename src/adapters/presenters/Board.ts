import { BoardPresenterImpl } from '../../domains/interfaces/presenters/board';
import { BoardUseCaseImpl } from '../../domains/interfaces/useCases/board';

class BoardPresenter implements BoardPresenterImpl {

  readonly useCase: BoardUseCaseImpl;

  constructor(sessionUseCase: BoardUseCaseImpl) {
    this.useCase = sessionUseCase;
  }

  getBoard() {
    return this.useCase.getBoard();
  }

}

export default BoardPresenter;