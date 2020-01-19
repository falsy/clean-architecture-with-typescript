import { TokenDTO, BoardDTO, MockInfrastructureImpl } from "../../domains/interfaces/infrastructures/Mock";
import { LoginInformation } from '../../domains/interfaces/vo/session';

class MockRemote implements MockInfrastructureImpl {

  login(LoginInfoVO: LoginInformation): Promise<TokenDTO> {
    const { id, pw } = LoginInfoVO;
    console.log(`id: ${id}`);
    console.log(`pw: ${pw}`);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          results: {
            token: 'user token ...'
          }
        });
      }, 500);
    });
  }

  getBoard(): Promise<BoardDTO> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          results: {
            list: [{
              id: 1,
              author: 'falsy',
              content: 'hello',
              createAt: new Date().getTime()
            }, {
              id: 2,
              author: 'falsy',
              content: 'world',
              createAt: new Date().getTime()
            }]
          }
        });
      }, 500);
    });
  }

  insertBoard(author: string, content: string): Promise<number> {
    console.log(`Author: ${author}`);
    console.log(`contnet: ${content}`);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(200);
      }, 500);
    });
  }
}

export default MockRemote;