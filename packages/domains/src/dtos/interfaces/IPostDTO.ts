import { IUserInfoVO } from "../../vos"

export default interface IPostDTO {
  readonly id: string
  readonly postId: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly createdAt: string
  readonly updatedAt: string
}
