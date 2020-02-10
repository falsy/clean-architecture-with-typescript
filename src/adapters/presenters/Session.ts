import IUseCases from '@interfaces/useCases';
import useCase from '@domains/useCases/di';
import LoginInfoVO from '@domains/vos/LoginInfo';

class SessionPresenter {

  private useCases: IUseCases;

  constructor() {
    this.useCases = useCase;
  }

  login(id: string, pw: string) {
    return this.useCases.session.login(new LoginInfoVO({ id, pw }));
  }

  getToken() {
    return this.useCases.session.getToken();
  }

  addToken(token: string) {
    this.useCases.session.addToken(token);
  }

  removeToken() {
    this.useCases.session.removeToken();
  }

}

export default new SessionPresenter();