import IRepositories from './interfaces/iRepositories'
import IInfrastructures from './interfaces/iInfrastructures'
import SessionRepository from '@adapters/repositories/Session'
import BoardRepository from '@adapters/repositories/Board'

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    board: new BoardRepository(infrastructure.http)
  }
}