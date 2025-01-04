import IPostDTO from "domains/dtos/interfaces/IPostDTO"
import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"

export default class PostDTO implements IPostDTO {
  readonly id: string
  title: string
  content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  updatedAt: Date

  constructor(post: IPostDTO) {
    this.id = post.id
    this.title = post.title
    this.content = post.content
    this.author = post.author
    this.createdAt = post.createdAt
    this.updatedAt = post.createdAt
  }
}
