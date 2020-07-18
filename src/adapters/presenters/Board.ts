import { IBoardPresenter } from './interfaces/iBoard';
import { IBoardUseCase } from '@domains/useCases/interfaces/iBoard';
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard';
import { IBoardAction, GET_BOARD } from '@frameworks/web/redux/interfaces/iBoard';

class BoardPresenter implements IBoardPresenter {

  private useCases: IBoardUseCase;
  private actions: any;

  constructor(useCases: IBoardUseCase, actions: any) {
    this.useCases = useCases;
    this.actions = actions;
  }

  async getBoards(): Promise<IBoardAction> {
    const boardEntityList: Array<IBoardEntity> = await this.useCases.getBoards();
    return this.actions.getBoard(boardEntityList);
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.useCases.insertBoard(author, content);
  };

}


export default BoardPresenter;