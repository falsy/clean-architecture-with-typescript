import useCases from '@domains/useCases';
import infrastructures from '@adapters/infrastructures';
import repositories from '@adapters/repositories';
import SessionPresenter from '@adapters/presenters/Session';
import SessionActions from '@frameworks/web/redux/actions/Session';
import { ITokenDTO } from '@adapters/infrastructures/interfaces/iRemote';
import { ISessionPresenter } from '@adapters/presenters/interfaces/iSession';
import { ILoginAction, LOGIN } from '@frameworks/web/redux/interfaces/iSession';

describe('session use case', () => {

  const infra = infrastructures();
  const responseMockData: ITokenDTO = {
    results: {
      token: 'token'
    }
  };

  const actionMockData: ILoginAction = {
    type: LOGIN,
    payload: {
      token: 'token'
    }
  };

  infra.remote.login = jest.fn().mockReturnValue(responseMockData);

  const repository = repositories(infra);
  const useCase = useCases(repository);
  const sessionAction = new SessionActions();
  let sessionPresenter: ISessionPresenter;

  sessionAction.setToken = jest.fn().mockReturnValue(actionMockData);

  beforeEach(() => {
    sessionPresenter = new SessionPresenter(useCase.session, sessionAction);
  });

  it('create session presenter', () => {
    expect(sessionPresenter).toBeDefined();
    expect(sessionPresenter).toHaveProperty('useCases');
    expect(sessionPresenter).toHaveProperty('actions');
  });

  it('method login()', async () => {
    const loginAction = await sessionPresenter.login('id', 'pw');

    expect(loginAction.type).toEqual(LOGIN);
    expect(loginAction.payload.token).toEqual('token');
  });

});