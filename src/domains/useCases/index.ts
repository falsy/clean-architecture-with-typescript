import IRepositories from '@interfaces/repositories';
import Session from './Session';
import Board from './Board';

export default (repositories: IRepositories) => {
  return {
    board: new Board(repositories.board),
    session: new Session(repositories.session)
  }
};