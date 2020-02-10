import IUseCases from '@interfaces/useCases';
import useCase from '@domains/useCases/di';
import IFrameworks from '@interfaces/frameworks';


class BoardPresenter {

  private useCases: IUseCases;
  private actions: IFrameworks;

  constructor(actions: IFrameworks) {
    this.useCases = useCase;
    this.actions = actions;
  }

  async getBoard() {
    const { results } = await this.useCases.board.getBoard();
    return this.actions.board.setBoard(results.list)
  }

  insertBoard(author: string, content: string) {
    return this.useCases.board.insertBoard(author, content);
  };

  useBoardListSelector() {
    return this.actions.board.useBoardListSelector();
  }

  reducer() {
    return this.actions.board.reducer();
  }

}


export default BoardPresenter;