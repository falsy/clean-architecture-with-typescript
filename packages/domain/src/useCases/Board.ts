import Board from '../aggregates/Board'
import Comment from '../entities/Comment'

import { IBoardEntity } from '../aggregates/Board'
import { IBoardRepository } from './repository-interfaces/iBoard'
import { IBoardDTO } from '../dto/BoardDTO'
import { ICommentDTO } from '../dto/CommentDTO'

class BoardUseCase {

  constructor(
    private readonly boardRepo: IBoardRepository
  ) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    const boarDTOList = await this.boardRepo.getBoards()
    const commentDTOList = await this.boardRepo.getComments()

    return boarDTOList.map((board: IBoardDTO) => {
      const comments = commentDTOList.filter(comment => comment.boardId === board.id)
        .map((comment: ICommentDTO) => new Comment(comment))
      const boardEntity = new Board(board).pushComment(comments)
      return boardEntity
    })
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.boardRepo.insertBoard(author, content)
  }

}

export default BoardUseCase