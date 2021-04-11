import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'

export interface IBoardPresenter {
  getBoards(): Promise<Array<IBoardEntity>>
  insertBoard(author: string, content: string): Promise<boolean>
}