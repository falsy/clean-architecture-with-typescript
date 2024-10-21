import { IUserInfoVO } from "../../vos"

export default interface ICommentDTO {
  readonly id: string
  readonly postId: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  readonly updatedAt: Date
}
