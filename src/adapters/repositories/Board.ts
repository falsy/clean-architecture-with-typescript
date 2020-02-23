import { IBoardRepository } from '@interfaces/repositories/board';
import { IBoardDTO } from "@interfaces/infrastructures/httpRequest";
import IInfrastructures from '@interfaces/infrastructures';

class BoardRepository implements IBoardRepository {

  readonly infra: IInfrastructures;

  constructor(infrastructure: IInfrastructures) {
    this.infra = infrastructure;
  }

  getBoard(): Promise<IBoardDTO> {
    return this.infra.httpRequest.getBoard();
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.infra.httpRequest.insertBoard(author, content);
  };

}

export default BoardRepository;