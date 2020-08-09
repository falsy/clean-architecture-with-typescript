import { ISessionUseCase } from '@domains/useCases/interfaces/iSession';
import { ISessionRepository } from '@adapters/repositories/interfaces/iSession';
import { ISessionVO } from '@domains/vos/interfaces/iSession';
import { ITokenDTO } from  "@adapters/infrastructures/interfaces/iRemote";
import SessionUseCase from '@domains/useCases/Session';

describe('session use case', () => {

  const mockToken = 'token';

  const responseMockData: ITokenDTO = {
    results: {
      token: mockToken
    },
    status: 200
  };

  class MockSessionRepository implements ISessionRepository {
    login(sessionVO: ISessionVO): Promise<ITokenDTO> {
      return new Promise(resolve => {
        resolve(responseMockData);
      });
    }
    getToken() {
      return 'token';
    }
    addToken(token: string) {}
    removeToken() {}
  }

  const mockSessionRepository = new MockSessionRepository();
  let sessionUseCase: ISessionUseCase;

  beforeEach(() => {
    sessionUseCase = new SessionUseCase(mockSessionRepository);
  });

  test('create session use case', () => {
    expect(sessionUseCase).toBeDefined();
  });

  test('request user token, login()', async () => {
    const userData: ISessionVO = { id: 'id', pw: 'pw' };
    const responseData = await sessionUseCase.login(userData);

    expect(responseData).toEqual(mockToken);
  });

  test('get user token, getToken()', () => {
    const token = sessionUseCase.getToken();
    
    expect(token).toEqual(mockToken);
  });

  test('test for the addToken method', () => {
    expect(sessionUseCase.addToken).toBeDefined();
  });

  test('test for the removeToken method', () => {
    expect(sessionUseCase.removeToken).toBeDefined();
  });

});