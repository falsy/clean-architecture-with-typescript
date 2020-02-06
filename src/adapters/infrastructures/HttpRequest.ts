import { TokenDTO, BoardDTO, IHttpRequest } from "@interfaces/infrastructures/httpRequest";
import { ILoginInfo } from '@interfaces/vos/session';

class HttpRequest implements IHttpRequest {

  readonly apiOrigin: string;

  constructor() {
    this.apiOrigin = process.env.API_ORIGIN;
  }

  login(LoginInfoVO: ILoginInfo): Promise<TokenDTO> {
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

export default HttpRequest;
