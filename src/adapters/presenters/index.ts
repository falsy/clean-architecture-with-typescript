import BoardPresenter from './Board';
import SessionPresenter from './Session';
import IUseCases from '@interfacesuseCases';

export default (useCases: IUseCases) => {
  return {
    board: new BoardPresenter(useCases.board),
    session: new SessionPresenter(useCases.session)
  }
}