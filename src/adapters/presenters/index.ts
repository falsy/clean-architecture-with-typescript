import UseCases from '../../domains/interfaces/useCases';
import SessionPresenter from './Session';

export default (useCase: UseCases) => {
  return {
    session: new SessionPresenter(useCase.session)
  };
};