import { IBoardRepository } from '@interfaces/repositories/board';
import { BoardDTO } from "@interfaces/infrastructures/httpRequest";
import IInfrastructures from '@interfaces/infrastructures';

class BoardRepository implements IBoardRepository {

  readonly infra: IInfrastructures;
  readonly isMock: boolean;

  constructor(infrastructure: IInfrastructures) {
    this.infra = infrastructure;
    this.isMock = process.env.STAGE === 'MOCK';
  }

  getBoard(): Promise<BoardDTO> {
    if(this.isMock) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            results: {
              list: [{
                id: 1,
                author: 'falsy',
                content: 'hello',
                createAt: new Date().getTime()
              }, {
                id: 2,
                author: 'falsy',
                content: 'world',
                createAt: new Date().getTime()
              }]
            }
          });
        }, 500);
      });
    }
    return this.infra.httpRequest.getBoard();
  }

  insertBoard(author: string, content: string): Promise<number> {
    if(this.isMock) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(200);
        }, 500);
      });
    }
    return this.infra.httpRequest.insertBoard(author, content);
  };

}

export default BoardRepository;