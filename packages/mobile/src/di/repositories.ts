import BoardRepository from 'adapter/src/repositories/Board';
import SessionRepository from 'adapter/src/repositories/Session';

export default (infrastructure: any) => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    board: new BoardRepository(infrastructure.http),
  };
};
