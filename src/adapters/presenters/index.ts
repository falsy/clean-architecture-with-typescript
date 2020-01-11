import UseCases from '../../domains/interfaces/useCases';
import SessionPresenter from './Session';
import BoardPresenter from './Board';

export default (useCase: UseCases) => {
  return {
    session: new SessionPresenter(useCase.session),
    board: new BoardPresenter(useCase.board)
  };
};