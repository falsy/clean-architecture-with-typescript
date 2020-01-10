import { SessionPresenterImpl } from '../../domains/interfaces/presenters/session';
import { SessionUseCaseImpl } from '../../domains/interfaces/useCases/session';
import LoginInfoVO from '../../domains/vo/LoginInfo';

class SessionPresenter implements SessionPresenterImpl {

  readonly useCase: SessionUseCaseImpl;

  constructor(sessionUseCase: SessionUseCaseImpl) {
    this.useCase = sessionUseCase;
  }

  login(id: string, pw: string) {
    return this.useCase.login(new LoginInfoVO({ id, pw }));
  }

}

export default SessionPresenter;