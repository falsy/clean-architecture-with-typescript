import { IComment } from "../entities"
import { ICategoryVO, IUserInfoVO } from "../vos"
import { IPostParams, IPost } from "./index"

export default class Post implements IPost {
  readonly id: string
  title: string
  content: string
  readonly author: IUserInfoVO
  category: ICategoryVO
  comments: IComment[]
  readonly createdAt: string
  readonly updatedAt: string

  constructor(params: IPostParams) {
    this.id = params.id
    this.title = params.title
    this.content = params.content
    this.author = params.author
    this.category = params.category
    this.comments = params.comments
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }

  addComment(comment: IComment) {
    this.comments.push(comment)
  }

  editComment(commentId: string, newContent: string) {
    const comment = this.comments.find((c) => c.id === commentId)
    if (comment) {
      comment.updateContent(newContent)
    }
  }
}
