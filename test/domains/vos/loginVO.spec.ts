import SessionVO from '@domains/vos/Session';
import { ISessionVO } from '@domains/vos/interfaces/iSession';

describe('create session', () => {

  it('create session value object', () => {
    const id = 'id';
    const pw = 'pw';
    
    const sessionData: ISessionVO = { id, pw };
    const sessionVO = new SessionVO(sessionData);

    expect(sessionVO.id).toEqual(id);
    expect(sessionVO.pw).toEqual(pw);
  });
  
});