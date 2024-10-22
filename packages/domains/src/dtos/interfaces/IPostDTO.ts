import { IUserInfoVO } from "../../vos"

export default interface IPostDTO {
  readonly id: string
  title: string
  content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  updatedAt: Date
}
