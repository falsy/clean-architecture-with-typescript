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

}

export default BaordUseCase;