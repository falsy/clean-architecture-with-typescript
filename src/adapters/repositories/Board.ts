import { IBoardRepository } from '@domains/useCases/repository-interfaces/iBoard'
import BoardDTO, { IBoardDTO, IBoardParams } from "@domains/dto/boardDTO"
import CommentDTO, { ICommentDTO, ICommentParams } from '@domains/dto/CommentDTO'
import IInfrastructures from '@adapters/infrastructures/interfaces'

class BoardRepository implements IBoardRepository {

  constructor(
    readonly infra: IInfrastructures
  ) {}

  async getBoards(): Promise<Array<IBoardDTO>> {
    const response = await this.infra.http.get({
      url: '/boards'
    })

    if(response?.boards) {
      return response.boards.map((board: IBoardParams) => new BoardDTO(board))
    }
  }

  async getComments(): Promise<Array<ICommentDTO>> {
    const response = await this.infra.http.get({
      url: '/comments'
    })

    if(response?.comments) {
      return response.comments.map((comment: ICommentParams) => new CommentDTO(comment))
    }
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.infra.http.post({
      url: '/boards',
      body: {
        author, 
        content
      }
    })
  }

}

export default BoardRepository