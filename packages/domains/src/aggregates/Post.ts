import { IComment } from "../entities"
import { IUserInfoVO } from "../vos"
import { IPostParams, IPost } from "./index"

export default class Post implements IPost {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly comments: IComment[]
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(params: IPostParams) {
    this.id = params.id
    this.title = params.title
    this.content = params.content
    this.author = params.author
    this.comments = params.comments
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
