import Infrastructures from '@adapters/infrastructures/interfaces'
import SessionRepository from './Session'
import BoardRepository from './Board'
import IRepositories from '../../domains/useCases/repository-interfaces'

export default (infrastructure: Infrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure),
    board: new BoardRepository(infrastructure)
  }
}