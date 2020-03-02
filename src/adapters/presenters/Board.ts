import { IBoardPresenter } from '@interfaces/presenters/board';
import { IBoardUseCase } from '@interfaces/useCases/board';
import { IBoardEntity } from '@interfaces/entities/board';

class BoardPresenter implements IBoardPresenter {

  private useCases: IBoardUseCase;

  constructor(useCases: IBoardUseCase) {
    this.useCases = useCases;
  }

  getBoards(): Promise<Array<IBoardEntity>> {
    return this.useCases.getBoards();
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.useCases.insertBoard(author, content);
  };

}


export default BoardPresenter;