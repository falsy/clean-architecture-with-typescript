import BoardDTO, { IBoardDTO, IBoardParams } from '../../../domain/src/dto/BoardDTO'
import CommentDTO, { ICommentDTO, ICommentParams } from '../../../domain/src/dto/CommentDTO'
import { IHttp } from "../infrastructures/Http"

class BoardRepository {

  constructor(
    private readonly baseURL: string,
    readonly http: IHttp
  ) {}

  async getBoards(): Promise<Array<IBoardDTO>> {
    const response = await this.http.request({
      method: 'GET',
      url: `${this.baseURL}/boards`
    })

    if(response?.boards) {
      return response.boards.map((board: IBoardParams) => new BoardDTO(board))
    }
  }

  async getComments(): Promise<Array<ICommentDTO>> {
    const response = await this.http.request({
      method: 'GET',
      url: `${this.baseURL}/comments`
    })

    if(response?.comments) {
      return response.comments.map((comment: ICommentParams) => new CommentDTO(comment))
    }
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.http.request({
      method: 'POST',
      url: `${this.baseURL}/boards`,
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