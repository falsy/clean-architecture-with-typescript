import { IBoardData } from '@interfacesentities/board';
import { IBoardDTO } from '@interfacesinfrastructures/httpRequest';

export interface IBoardPresenter {
  getBoard(): Promise<IBoardDTO>;
  insertBoard(author: string, content: string): Promise<number>;
}