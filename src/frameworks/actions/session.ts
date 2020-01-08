import { LOGIN } from "../../constants";
import { DispatchSession } from "../../domains/interfaces/presenters/session";

function testPromise(id: string, pw: string): Promise<string> {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve("token");
    }, 1000);
  });
}

export function login(id: string, pw: string) {
  return async (dispatch: DispatchSession) => {
    const token = await testPromise(id, pw);
    dispatch({
      type: LOGIN,
      payload: {
        token
      }
    });
  };
}
