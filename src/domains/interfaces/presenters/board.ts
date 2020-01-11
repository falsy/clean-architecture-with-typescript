import { BoardDTO } from '../infrastructures/Remote';

export interface BoardPresenterImpl {
  getBoard(): Promise<BoardDTO>;
};