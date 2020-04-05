import { IBoardPresenter } from '@interfaces/presenters/board';
import { IBoardUseCase } from '@interfaces/useCases/board';
import { IBoardEntity } from '@interfaces/entities/board';
import { IBoardAction, GET_BOARD } from '@interfaces/frameworks/board';

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