import { IBoardDTO, ICommentDTO } from '../infrastructures/Remote';

export interface IBoardRepository {
  getBoards(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
  getComments(): Promise<ICommentDTO>;
}