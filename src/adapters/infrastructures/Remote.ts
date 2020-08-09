import { ITokenDTO, IBoardDTO, IRemote } from "./interfaces/iRemote";
import { ISessionVO } from '@domains/vos/interfaces/iSession';

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
    }).then(res => {
      if(res.status !== 200) return { results: { token: '' }, status: res.status};
      return res.json();
    });
  }

  getBoards(): Promise<IBoardDTO> {
    return fetch(`/boards`, {
      method: 'GET'
    }).then(res => res.json());
  }

  getComments() {
    return fetch(`/comments`, {
      method: 'GET'
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
