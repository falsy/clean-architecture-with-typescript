import { BoardRepositoryImpl } from '../../domains/interfaces/repositories/board';
import { RemoteInfrastructureImpl } from '../../domains/interfaces/infrastructures/Remote';

class BoardRepository implements BoardRepositoryImpl {

  readonly infrastructure: RemoteInfrastructureImpl;

  constructor(infrastructure: RemoteInfrastructureImpl) {
    this.infrastructure = infrastructure;
  }

  getBoard() {
    return this.infrastructure.getBoard();
  }

  insertBoard(author: string, content: string) {
    return this.infrastructure.insertBoard(author, content);
  };

}

export default BoardRepository;