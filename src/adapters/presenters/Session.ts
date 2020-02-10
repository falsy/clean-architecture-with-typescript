import IUseCases from '@interfaces/useCases';
import useCase from '@domains/useCases/di';
import LoginInfoVO from '@domains/vos/LoginInfo';
import IFrameworks from '@interfaces/frameworks';


class SessionPresenter {

  private useCases: IUseCases;
  private actions: IFrameworks;

  constructor(actions: IFrameworks) {
    this.useCases = useCase;
    this.actions = actions;
  }

  async login(id: string, pw: string) {
    const { results: { token } } = await this.useCases.session.login(new LoginInfoVO({ id, pw }));
    this.addToken(token);
    return this.actions.session.setToken(token);
  }

  getToken() {
    return this.useCases.session.getToken();
  }

  addToken(token: string) {
    this.useCases.session.addToken(token);
    return this.actions.session.setToken(token);
  }

  removeToken() {
    this.useCases.session.removeToken();
    return this.actions.session.setToken('');
  }

  useTokenSelector() {
    return this.actions.session.useTokenSelector();
  }

  reducer() {
    return this.actions.session.reducer();
  }

}


export default SessionPresenter;