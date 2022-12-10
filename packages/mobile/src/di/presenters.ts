import BoardPresenter from 'adapter/src/presenters/Board';
import SessionPresenter from 'adapter/src/presenters/Session';

export default (useCases: any) => {
  return {
    board: new BoardPresenter(useCases.board),
    session: new SessionPresenter(useCases.session),
  };
};
