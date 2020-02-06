import { ISessionUseCase } from './session';
import { IBoardUseCase } from './board';

export default interface UseCases {
  session: ISessionUseCase;
  board: IBoardUseCase;
}