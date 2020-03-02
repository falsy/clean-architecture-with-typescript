import { IBoardEntity } from '@interfaces/entities/board';

export interface IBoardUseCase {
  getBoards(): Promise<Array<IBoardEntity>>;
  insertBoard(author: string, content: string): Promise<number>;
}