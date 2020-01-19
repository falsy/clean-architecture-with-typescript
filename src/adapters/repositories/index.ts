import Infrastructures from '../../domains/interfaces/infrastructures';
import SessionRepository from './Session';
import BoardRepository from './Board';

export default (infrastructure: Infrastructures) => {
  const infraTarget = process.env.STAGE === 'MOCK' ? infrastructure.mock : infrastructure.remote;

  return {
    session: new SessionRepository(infraTarget),
    board: new BoardRepository(infraTarget)
  };
};