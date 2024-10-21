import { IUserInfoVO } from "../../vos"

export default interface IComment {
  readonly id: string
  readonly postId: string
  readonly author: IUserInfoVO
  content: string
  readonly createdAt: Date
  readonly updatedAt: Date
  updateContent(content: string): void
}

export interface ICommentParams {
  readonly id: string
  readonly postId: string
  readonly author: IUserInfoVO
  readonly content: string
  readonly createdAt: Date
  readonly updatedAt: Date
}
