import { ICommentData } from '@domains/entities/interfaces/iComment';
import { IBoardData } from '@domains/aggregates/interfaces/iBoard';
import { ISessionVO } from '@domains/vos/interfaces/iSession';

export interface ITokenDTO {
  results: {
    token: string
  },
  status: number
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