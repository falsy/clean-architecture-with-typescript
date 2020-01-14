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

  insertBoard(author: string, content: string) {
    return this.useCase.insertBoard(author, content);
  };

}

export default BoardPresenter;