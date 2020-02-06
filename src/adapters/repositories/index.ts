import Infrastructures from '@domains/interfaces/infrastructures';
import SessionRepository from './Session';
import BoardRepository from './Board';

export default (infrastructure: Infrastructures) => {
  return {
    session: new SessionRepository(infrastructure),
    board: new BoardRepository(infrastructure)
  };
};