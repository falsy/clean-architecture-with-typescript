import { TokenDTO, BoardDTO, RemoteInfrastructureImpl } from "../../domains/interfaces/infrastructures/Remote";
import { LoginInformation } from '../../domains/interfaces/vo/session';

class Remote implements RemoteInfrastructureImpl {

  login(LoginInfoVO: LoginInformation): Promise<TokenDTO> {
    const { id, pw } = LoginInfoVO;

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
    return fetch('http://localhost:7777/boards', {
      method: 'GET',
    }).then(res => res.json());
  }

  insertBoard(author: string, content: string): Promise<number> {
    return fetch('http://localhost:7777/boards', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author, content
      })
    }).then(res => res.status);
  }
}

export default Remote;
