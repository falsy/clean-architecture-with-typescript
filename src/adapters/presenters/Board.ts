import { IBoardPresenter } from '@interfaces/presenters/board';
import { IBoardUseCase } from '@interfacesuseCases/board';
import { IBoardEntity } from '@interfacesentities/board';

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