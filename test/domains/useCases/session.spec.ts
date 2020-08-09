import { ISessionUseCase } from '@domains/useCases/interfaces/iSession';
import { ISessionVO } from '@domains/vos/interfaces/iSession';
import { ITokenDTO } from  "@adapters/infrastructures/interfaces/iRemote";
import SessionUseCase from '@domains/useCases/Session';
import infrastructures from '@adapters/infrastructures';
import repositories from '@adapters/repositories';

describe('session use case', () => {

  const mockToken = 'token';

  const responseMockData: ITokenDTO = {
    results: {
      token: mockToken
    },
    status: 200
  };

  const infra = infrastructures();
  const sessionRepository = repositories(infra);
  let sessionUseCase: ISessionUseCase;

  beforeEach(() => {
    sessionRepository.session.login = jest.fn().mockResolvedValue(responseMockData);
    sessionUseCase = new SessionUseCase(sessionRepository.session);
  });

  test('create session use case', () => {
    expect(sessionUseCase).toBeDefined();
  });

  test('request user token, login() - success', async () => {
    const userData: ISessionVO = { id: 'id', pw: 'pw' };
    const responseData = await sessionUseCase.login(userData);

    expect(responseData).toEqual(mockToken);
  });

});