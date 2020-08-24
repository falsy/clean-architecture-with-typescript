import SessionActions from "@frameworks/web/redux/actions/Session";
import { LOGIN } from "@frameworks/web/redux/interfaces/iSession";
import { ISessionActions } from "@adapters/presenters/action-interfaces/ISession";

describe('session actions', () => {

  const sessionActions: ISessionActions = new SessionActions();

  it('create session actions', () => {
    const setTokenAction = sessionActions.setToken('token');

    expect(setTokenAction.type).toEqual(LOGIN);
    expect(setTokenAction.payload.token).toEqual('token');
  });

});