import Infrastructures from '@adapters/infrastructures/interfaces/iInfrastructures';
import SessionRepository from './Session';
import BoardRepository from './Board';
import IRepositories from '../../domains/interfaces-repo/iRepositories';

export default (infrastructure: Infrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure),
    board: new BoardRepository(infrastructure)
  };
};