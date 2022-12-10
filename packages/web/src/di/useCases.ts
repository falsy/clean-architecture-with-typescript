import Board from 'domain/src/useCases/Board'
import Session from 'domain/src/useCases/Session'
import { IRepositories } from './repositories'

export interface IUseCases {
  session: Session
  board: Board
}

export default (repositories: IRepositories): IUseCases => {
  return {
    session: new Session(repositories.session),
    board: new Board(repositories.board)
  }
}