import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"

export default interface ICommentDTO {
  readonly id: string
  readonly postId: string
  content: string
  readonly author: IUserInfoVO
  readonly createdAt: string
  updatedAt: string
}
