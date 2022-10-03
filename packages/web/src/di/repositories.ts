import BoardRepository from '@adapter/repositories/Board'
import SessionRepository from '@adapter/repositories/Session'

export default (infrastructure: any) => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    board: new BoardRepository(infrastructure.http)
  }
}