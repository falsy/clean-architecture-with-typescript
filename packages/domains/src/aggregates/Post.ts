import IComment from "domains/entities/interfaces/IComment"
import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"
import IPost, { IPostParams } from "./interfaces/IPost"

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
    this.createdAt = new Date(params.createdAt)
    this.updatedAt = new Date(params.updatedAt)
  }
}
