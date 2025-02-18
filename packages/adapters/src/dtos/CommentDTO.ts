import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"
import ICommentDTO from "domains/dtos/interfaces/ICommentDTO"

export default class CommentDTO implements ICommentDTO {
  readonly id: string
  readonly postId: string
  content: string
  readonly author: IUserInfoVO
  readonly createdAt: string
  updatedAt: string

  constructor(params: ICommentDTO) {
    this.id = params.id
    this.postId = params.postId
    this.content = params.content
    this.author = params.author
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
