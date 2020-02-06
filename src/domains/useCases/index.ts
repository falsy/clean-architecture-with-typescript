import Repositories from '../interfaces/repositories';
import Session from './Session';
import Board from './Board';

export default (repositories: Repositories) => {
  return {
    session: new Session(repositories.session),
    board: new Board(repositories.board)
  }
}