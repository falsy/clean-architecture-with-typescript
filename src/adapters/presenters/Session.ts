import useCase from '../../domains/di';
import LoginInfoVO from '../../domains/vos/LoginInfo';

class SessionPresenter {

  public static login(id: string, pw: string) {
    return useCase.session.login(new LoginInfoVO({ id, pw }));
  }

}

export default SessionPresenter;