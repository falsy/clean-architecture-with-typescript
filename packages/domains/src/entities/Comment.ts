import { IUserInfoVO } from "../vos"
import IComment, { ICommentParams } from "./interfaces/IComment"

export default class Comment implements IComment {
  readonly id: string
  readonly postId: string
  readonly author: IUserInfoVO
  readonly content: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(parmas: ICommentParams) {
    this.id = parmas.id
    this.postId = parmas.postId
    this.author = parmas.author
    this.content = parmas.content
    this.createdAt = parmas.createdAt
    this.updatedAt = parmas.updatedAt
  }
}
