import { ICommentDTO, IUserInfoVO } from "domains"

export default class CommentDTO implements ICommentDTO {
  readonly id: string
  readonly postId: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(params: ICommentDTO) {
    this.id = params.id
    this.postId = params.postId
    this.content = params.content
    this.author = params.author
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
