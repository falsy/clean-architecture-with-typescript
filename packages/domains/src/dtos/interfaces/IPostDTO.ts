import { IUserInfoVO } from "../../vos"

export default interface IPostDTO {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly createdAt: Date
  readonly updatedAt: Date
}
