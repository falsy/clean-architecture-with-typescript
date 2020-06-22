import { IBoardPresenter } from './interfaces/iBoard';
import { IBoardUseCase } from '@domains/useCases/interfaces/iBoard';
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard';
import { IBoardAction, GET_BOARD } from '@frameworks/web/redux/interfaces/iBoard';

class BoardPresenter implements IBoardPresenter {

  private useCases: IBoardUseCase;

  constructor(useCases: IBoardUseCase) {
    this.useCases = useCases;
  }

  async getBoards(): Promise<IBoardAction> {
    const boardEntityList: Array<IBoardEntity> = await this.useCases.getBoards();
    
    return {
      type: GET_BOARD,
      payload: {
        list: boardEntityList
      }
    }
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.useCases.insertBoard(author, content);
  };

}


export default BoardPresenter;