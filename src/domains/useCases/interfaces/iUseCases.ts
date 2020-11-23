import { ISessionUseCase } from './iSession'
import { IBoardUseCase } from './iBoard'

export default interface IUseCases {
  session: ISessionUseCase
  board: IBoardUseCase
}