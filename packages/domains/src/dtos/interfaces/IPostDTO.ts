import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"

export default interface IPostDTO {
  readonly id: string
  title: string
  content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  updatedAt: Date
}
