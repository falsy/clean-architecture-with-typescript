import infrastructures from '@adapters/infrastructures';
import repositories from '@adapters/repositories';
import { ISessionVO } from '@domains/vos/interfaces/iSession';
import { ISessionRepository } from "@domains/interfaces-repo/iSession";
import { ITokenDTO } from '@adapters/infrastructures/interfaces/iRemote';

describe('session use case', () => {

  const infra = infrastructures();
  const responseMockData: ITokenDTO = {
    results: {
      token: 'token'
    }
  };

  infra.remote.login = jest.fn().mockReturnValue(responseMockData);

  const repository = repositories(infra);
  let sessionRepo: ISessionRepository;

  beforeEach(() => {
    sessionRepo = repository.session;
  });

  it('create session repository', () => {
    expect(sessionRepo).toBeDefined();
    expect(sessionRepo).toHaveProperty('infrastructure');
  });

  it('method login()', () => {
    const userData: ISessionVO = { id: 'id', pw: 'pw' };
    const responseData = sessionRepo.login(userData);

    expect(responseData).toEqual(responseMockData);
  });

});