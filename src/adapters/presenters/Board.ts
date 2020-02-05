import useCase from '../../domains/di';

class BoardPresenter {

  public static getBoard() {
    return useCase.board.getBoard();
  }

  public static insertBoard(author: string, content: string) {
    return useCase.board.insertBoard(author, content);
  };

}

export default BoardPresenter;