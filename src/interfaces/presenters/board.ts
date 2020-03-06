import { IBoardVM } from '@interfaces/vms/board';

export interface IBoardPresenter {
  getBoards(): Promise<Array<IBoardVM>>;
  insertBoard(author: string, content: string): Promise<number>;
}