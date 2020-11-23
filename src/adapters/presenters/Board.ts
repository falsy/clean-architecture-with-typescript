import { IBoardPresenter } from './interfaces/iBoard'
import { IBoardUseCase } from '@domains/useCases/interfaces/iBoard'
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'
import { IBoardAction } from './action-interfaces/iBoard'

class BoardPresenter implements IBoardPresenter {

  constructor(
    private readonly useCases: IBoardUseCase, 
    private readonly actions: any
  ) {}

  async getBoards(): Promise<IBoardAction> {
    const boardEntityList: Array<IBoardEntity> = await this.useCases.getBoards()
    return this.actions.getBoards(boardEntityList)
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCases.insertBoard(author, content)
  }

}


export default BoardPresenter