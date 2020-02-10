import { IBoardData } from '../entities/board';
import { ILoginInfo } from '../vos/session';

export interface TokenDTO {
  results: {
    token: string
  }
}

export interface BoardDTO {
  results: {
    list: Array<IBoardData>
  }
}

export interface IHttpRequest {
  login(LoginInfoVO: ILoginInfo): Promise<TokenDTO>;
  getBoard(): Promise<BoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}