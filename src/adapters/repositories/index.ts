import Infrastructures from '../../domains/interfaces/infrastructures';
import SessionRepository from './Session';

export default (infrastructure: Infrastructures) => {
  return {
    session: new SessionRepository(infrastructure.remote)
  };
};