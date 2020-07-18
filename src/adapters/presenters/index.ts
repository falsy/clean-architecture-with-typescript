import IUseCases from '@domains/useCases/interfaces/iUseCases';
import BoardPresenter from './Board';
import SessionPresenter from './Session';

export default (useCases: IUseCases, actions: any) => {
  return {
    board: new BoardPresenter(useCases.board, actions.board),
    session: new SessionPresenter(useCases.session, actions.session)
  };
};