import { IBoardRepository } from '@adapters/repositories/interfaces/iBoard';
import { IBoardDTO } from "@adapters/infrastructures/interfaces/iRemote";
import IInfrastructures from '@adapters/infrastructures/interfaces/iInfrastructures';

class BoardRepository implements IBoardRepository {

  readonly infra: IInfrastructures;

  constructor(infrastructure: IInfrastructures) {
    this.infra = infrastructure;
  }

  getBoards(): Promise<IBoardDTO> {
    return this.infra.remote.getBoards();
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.infra.remote.insertBoard(author, content);
  }

  getComments() {
    return this.infra.remote.getComments();
  }

}

export default BoardRepository;