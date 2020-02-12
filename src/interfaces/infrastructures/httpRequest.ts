import { IBoardData } from '../entities/board';
import { ILoginInfo } from '../vos/session';

export interface ITokenDTO {
  results: {
    token: string
  }
}

export interface IBoardDTO {
  results: {
    list: Array<IBoardData>
  }
}

export interface IHttpRequest {
  login(LoginInfoVO: ILoginInfo): Promise<ITokenDTO>;
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}