import { IBoardUseCase } from '../interfaces/useCases/board';
import { IBoardRepository } from '../interfaces/repositories/board';

class BaordUseCase implements IBoardUseCase {

  readonly repository: IBoardRepository;

  constructor(sessionRepositories: IBoardRepository) {
    this.repository = sessionRepositories;
  }

  getBoard() {
    return this.repository.getBoard();
  }

  insertBoard(author: string, content: string) {
    return this.repository.insertBoard(author, content);
  };

}

export default BaordUseCase;