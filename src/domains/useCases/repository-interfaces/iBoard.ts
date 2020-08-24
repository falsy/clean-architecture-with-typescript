import { IBoardDTO, ICommentDTO } from '@adapters/infrastructures/interfaces/iRemote';

export interface IBoardRepository {
  getBoards(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
  getComments(): Promise<ICommentDTO>;
}