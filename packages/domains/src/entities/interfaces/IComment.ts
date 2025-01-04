import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"

export default interface IComment {
  readonly id: string
  readonly postId: string
  readonly author: IUserInfoVO
  readonly content: string
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface ICommentParams {
  readonly id: string
  readonly postId: string
  readonly author: IUserInfoVO
  readonly content: string
  readonly createdAt: Date
  readonly updatedAt: Date
}
