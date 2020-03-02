import { IBoardEntity } from '@interfacesentities/board';

export interface IBoardUseCase {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<number>;
}