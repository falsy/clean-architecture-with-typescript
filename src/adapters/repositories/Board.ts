import { IBoardRepository } from '@domains/useCases/repository-interfaces/iBoard'
import BoardDTO, { IBoardDTO, IBoardParams } from "@domains/dto/boardDTO"
import CommentDTO, { ICommentDTO, ICommentParams } from '@domains/dto/CommentDTO'
import IInfrastructures from '@adapters/infrastructures/interfaces'

class BoardRepository implements IBoardRepository {

  constructor(
    readonly infrastructure: IInfrastructures
  ) {}

  async getBoards(): Promise<Array<IBoardDTO>> {
    const response = await this.infrastructure.http.request({
      method: 'GET',
      url: '/boards'
    })

    if(response?.boards) {
      return response.boards.map((board: IBoardParams) => new BoardDTO(board))
    }
  }

  async getComments(): Promise<Array<ICommentDTO>> {
    const response = await this.infrastructure.http.request({
      method: 'GET',
      url: '/comments'
    })

    if(response?.comments) {
      return response.comments.map((comment: ICommentParams) => new CommentDTO(comment))
    }
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.infrastructure.http.request({
      method: 'POST',
      url: '/boards',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        author, 
        content
      }
    })
  }

}

export default BoardRepository