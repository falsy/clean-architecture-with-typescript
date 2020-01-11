import { TokenDTO, BoardDTO, RemoteInfrastructureImpl } from "../../domains/interfaces/infrastructures/Remote";
import { LoginInformation } from '../../domains/interfaces/vo/session';

class Remote implements RemoteInfrastructureImpl {

  login(LoginInfoVO: LoginInformation): Promise<TokenDTO> {
    const { id, pw } = LoginInfoVO;
    console.log(`login id: ${id} / pw: ${pw}`);

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
    })
  }
}

export default Remote;
