import { IBoardPresenter } from './interfaces/iBoard'
import { IBoardUseCase } from '@domains/useCases/interfaces/iBoard'
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'

class BoardPresenter implements IBoardPresenter {

  constructor(
    private readonly useCases: IBoardUseCase
  ) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    return await this.useCases.getBoards()
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCases.insertBoard(author, content)
  }

}


export default BoardPresenter