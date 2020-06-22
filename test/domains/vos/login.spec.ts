import { ISessionVO } from '@domains/vos/interfaces/iSession';
import SessionVO from '@domains/vos/Session';

describe('create session', () => {
  test('create session value object', () => {
    const id = 'id';
    const pw = 'pw';
    
    const sessionData: ISessionVO = { id, pw };
    const sessionVO = new SessionVO(sessionData);

    expect(sessionVO.id).toEqual(id);
    expect(sessionVO.pw).toEqual(pw);
  });
});