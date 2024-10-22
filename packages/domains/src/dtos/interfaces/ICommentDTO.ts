import { IUserInfoVO } from "../../vos"

export default interface ICommentDTO {
  readonly id: string
  readonly postId: string
  content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  updatedAt: Date
}
