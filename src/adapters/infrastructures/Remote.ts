import { TokenDTO, BoardDTO, RemoteInfrastructureImpl } from "../../domains/interfaces/infrastructures/remote";
import { LoginInformation } from '../../domains/interfaces/vo/session';

class Remote implements RemoteInfrastructureImpl {

  readonly apiOrigin: string;

  constructor() {
    this.apiOrigin = process.env.API_ORIGIN;
  }

  login(LoginInfoVO: LoginInformation): Promise<TokenDTO> {
    const { id, pw } = LoginInfoVO;

    return fetch(`${this.apiOrigin}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id, pw
      })
    }).then(res => res.json());
  }

  getBoard(): Promise<BoardDTO> {
    return fetch(`${this.apiOrigin}/boards`, {
      method: 'GET',
    }).then(res => res.json());
  }

  insertBoard(author: string, content: string): Promise<number> {
    return fetch(`${this.apiOrigin}/boards`, {
      method: 'POST',
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
