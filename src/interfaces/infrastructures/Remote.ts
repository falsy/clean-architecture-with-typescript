import { ICommentData } from '../entities/comment';
import { IBoardData } from '../entities/board';
import { ISessionVO } from '../valueObjects/session';

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

export interface ICommentDTO {
  results: {
    list: Array<ICommentData>
  }
}

export interface IRemote {
  login(SessionVO: ISessionVO): Promise<ITokenDTO>;
  getBoards(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
  getComments(): Promise<ICommentDTO>
}