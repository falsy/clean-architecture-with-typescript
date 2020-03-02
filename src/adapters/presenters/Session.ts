import { ISessionPresenter } from '@interfaces/presenters/session';
import SessionVO from '@domains/vos/Session';
import { ISessionUseCase } from '@interfaces/useCases/session';
import { ITokenDTO } from '@interfaces/infrastructures/Remote';

class SessionPresenter implements ISessionPresenter {

  private useCases: ISessionUseCase;

  constructor(useCases: ISessionUseCase) {
    this.useCases = useCases;
  }

  login(id: string, pw: string): Promise<ITokenDTO> {
    return this.useCases.login(new SessionVO({ id, pw }));
  }

  getToken(): string {
    return this.useCases.getToken();
  }

  removeToken() {
    return this.useCases.removeToken();
  }

}


export default SessionPresenter;