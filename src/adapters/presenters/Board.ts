import IUseCases from '@interfaces/useCases';
import useCase from '@domains/di';

class BoardPresenter {

  private useCases: IUseCases;

  constructor() {
    this.useCases = useCase;
  }

  getBoard() {
    return this.useCases.board.getBoard();
  }

  insertBoard(author: string, content: string) {
    return this.useCases.board.insertBoard(author, content);
  };

}

export default new BoardPresenter();