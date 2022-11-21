import BoardPresenter from 'adapter/src/presenters/Board';

export default (useCases: any) => {
  return {
    board: new BoardPresenter(useCases.board),
  };
};
