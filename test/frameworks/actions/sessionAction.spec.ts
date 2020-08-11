import SessionActions from "@frameworks/web/redux/actions/Session";
import { ISessionActions, LOGIN } from "@frameworks/web/redux/interfaces/iSession";

describe('session actions', () => {

  const sessionActions: ISessionActions = new SessionActions();

  it('create session actions', () => {
    const setTokenAction = sessionActions.setToken('token');

    expect(setTokenAction.type).toEqual(LOGIN);
    expect(setTokenAction.payload.token).toEqual('token');
  });

});