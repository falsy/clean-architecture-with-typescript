import { IBoardData } from '@interfaces/entities/board';
import { IBoardAction, IReducer } from '@interfaces/frameworks/board';
import { IBoardPresenter } from '@interfaces/presenters/board';
import IUseCases from '@interfaces/useCases';
import useCase from '@domains/useCases/di';
import IFrameworks from '@interfaces/frameworks';


class BoardPresenter implements IBoardPresenter {

  private useCases: IUseCases;
  private actions: IFrameworks;

  constructor(actions: IFrameworks) {
    this.useCases = useCase;
    this.actions = actions;
  }

  async getBoard(): Promise<IBoardAction> {
    const { results } = await this.useCases.board.getBoard();
    return this.actions.board.setBoard(results.list);
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.useCases.board.insertBoard(author, content);
  };

  useBoardListSelector(): Array<IBoardData> {
    return this.actions.board.useBoardListSelector();
  }

  reducer(): IReducer {
    return this.actions.board.reducer();
  }

}


export default BoardPresenter;