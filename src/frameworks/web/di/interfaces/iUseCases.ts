import { ISessionUseCase } from '@domains/useCases/interfaces/iSession'
import { IBoardUseCase } from '@domains/useCases/interfaces/iBoard'

export default interface IUseCases {
  session: ISessionUseCase
  board: IBoardUseCase
}