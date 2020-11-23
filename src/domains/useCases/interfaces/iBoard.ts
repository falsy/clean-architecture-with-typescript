import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'

export interface IBoardUseCase {
  getBoards(): Promise<Array<IBoardEntity>>
  insertBoard(author: string, content: string): Promise<boolean>
}