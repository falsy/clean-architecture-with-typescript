import IRepositories from '@domains/useCases/repository-interfaces/iRepositories';
import Session from './Session';
import Board from './Board';
import IUseCases from './interfaces/iUseCases';

export default (repositories: IRepositories): IUseCases => {
  return {
    board: new Board(repositories.board),
    session: new Session(repositories.session)
  }
};