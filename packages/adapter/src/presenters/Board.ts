import BoardUseCase from '@domain/useCases/Board'
import { IBoardEntity } from '@domain/aggregates/Board'

class BoardPresenter {

  constructor(
    private readonly useCases: BoardUseCase
  ) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    return await this.useCases.getBoards()
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCases.insertBoard(author, content)
  }

}


export default BoardPresenter