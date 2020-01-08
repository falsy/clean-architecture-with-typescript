import SessionPresenter from "./Session";

export default (useCase: any) => {
  return {
    session: new SessionPresenter(useCase.session)
  };
};
