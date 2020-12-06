import IRepositories from './interfaces/iRepositories'
import IUseCases from './interfaces/iUseCases'
import Session from '@domains/useCases/Session'
import Board from '@domains/useCases/Board'

export default (repositories: IRepositories): IUseCases => {
  return {
    board: new Board(repositories.board),
    session: new Session(repositories.session)
  }
}