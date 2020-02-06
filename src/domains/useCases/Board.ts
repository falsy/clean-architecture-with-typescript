import { BoardUseCaseImpl } from '../interfaces/useCases/board';
import { BoardRepositoryImpl } from '../interfaces/repositories/board';

class BaordUseCase implements BoardUseCaseImpl {

  readonly repository: BoardRepositoryImpl;

  constructor(sessionRepositories: BoardRepositoryImpl) {
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