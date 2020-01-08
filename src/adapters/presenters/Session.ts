import { SessionPresenterImpl } from "../../domains/interfaces/presenters/session";
import { SessionUseCaseImpl } from "../../domains/interfaces/useCases/session";

class SessionPresenter implements SessionPresenterImpl {
  readonly useCase: SessionUseCaseImpl;

  constructor(sessionUseCase: SessionUseCaseImpl) {
    this.useCase = sessionUseCase;
  }

  login(id: string, pw: string) {
    return this.useCase.login(id, pw);
  }
}

export default SessionPresenter;
