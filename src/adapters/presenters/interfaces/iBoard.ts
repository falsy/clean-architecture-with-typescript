import { IBoardAction } from '../action-interfaces/iBoard'

export interface IBoardPresenter {
  getBoards(): Promise<IBoardAction>
  insertBoard(author: string, content: string): Promise<boolean>
}