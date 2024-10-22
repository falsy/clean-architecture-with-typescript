import { IPostDTO, IUserInfoVO } from "domains"

export default class PostDTO implements IPostDTO {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(post: IPostDTO) {
    this.id = post.id
    this.title = post.title
    this.content = post.content
    this.author = post.author
    this.createdAt = post.createdAt
    this.updatedAt = post.createdAt
  }
}
