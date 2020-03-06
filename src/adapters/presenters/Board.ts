import { IBoardPresenter } from '@interfaces/presenters/board';
import { IBoardUseCase } from '@interfaces/useCases/board';
import { IBoardEntity } from '@interfaces/entities/board';
import { IBoardVM } from '@interfaces/vms/board';
import BoardVM from '@adapters/vms/Board';

class BoardPresenter implements IBoardPresenter {

  private useCases: IBoardUseCase;

  constructor(useCases: IBoardUseCase) {
    this.useCases = useCases;
  }

  async getBoards(): Promise<Array<IBoardVM>> {
    const boardList: Array<IBoardEntity> = await this.useCases.getBoards();
    return boardList.map(board => new BoardVM(board));
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.useCases.insertBoard(author, content);
  };

}


export default BoardPresenter;