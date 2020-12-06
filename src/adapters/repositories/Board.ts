import { IBoardRepository } from '@domains/useCases/repository-interfaces/iBoard'
import BoardDTO, { IBoardDTO, IBoardParams } from "@domains/dto/BoardDTO"
import CommentDTO, { ICommentDTO, ICommentParams } from '@domains/dto/CommentDTO'
import { IHttp } from '@adapters/infrastructures/interfaces/iHttp'

class BoardRepository implements IBoardRepository {

  constructor(
    readonly http: IHttp
  ) {}

  async getBoards(): Promise<Array<IBoardDTO>> {
    const response = await this.http.request({
      method: 'GET',
      url: 'http://localhost:7777/boards'
    })

    if(response?.boards) {
      return response.boards.map((board: IBoardParams) => new BoardDTO(board))
    }
  }

  async getComments(): Promise<Array<ICommentDTO>> {
    const response = await this.http.request({
      method: 'GET',
      url: 'http://localhost:7777/comments'
    })

    if(response?.comments) {
      return response.comments.map((comment: ICommentParams) => new CommentDTO(comment))
    }
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.http.request({
      method: 'POST',
      url: 'http://localhost:7777/boards',
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