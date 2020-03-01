import { ITokenDTO, IBoardDTO, IRemote } from "@interfaces/infrastructures/Remote";
import { ISessionVO } from '@interfaces/vos/session';

class Remote implements IRemote {

  login(SessionVO: ISessionVO): Promise<ITokenDTO> {
    const { id, pw } = SessionVO;

    return fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id, pw
      })
    }).then(res => res.json());
  }

  getBoard(): Promise<IBoardDTO> {
    return fetch(`/boards`, {
      method: 'GET',
    }).then(res => res.json());
  }

  insertBoard(author: string, content: string): Promise<number> {
    return fetch(`/boards`, {
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
