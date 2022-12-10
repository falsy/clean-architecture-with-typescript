import BoardRepository from 'adapter/src/repositories/Board'
import SessionRepository from 'adapter/src/repositories/Session'

export default (infrastructure: any) => {
  const baseURL = 'http://localhost:7777';
  return {
    session: new SessionRepository(baseURL, infrastructure.http, infrastructure.storage),
    board: new BoardRepository(baseURL, infrastructure.http)
  }
}