import { ISessionUseCase } from './session';
import { IBoardUseCase } from './board';

export default interface IUseCases {
  session: ISessionUseCase;
  board: IBoardUseCase;
}