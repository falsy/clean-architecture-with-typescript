import { ISessionRepository } from '@domains/useCases/repository-interfaces/iSession'
import { IBoardRepository } from '@domains/useCases/repository-interfaces/iBoard'

export default interface IRepositories {
  session: ISessionRepository
  board: IBoardRepository
}