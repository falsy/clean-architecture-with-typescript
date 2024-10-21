import { IComment } from "../../entities"
import { IUserInfoVO, ICategoryVO } from "../../vos"

export default interface IPost {
  readonly id: string
  title: string
  content: string
  readonly author: IUserInfoVO
  category: ICategoryVO
  comments: IComment[]
  readonly createdAt: string
  readonly updatedAt: string
}

export interface IPostParams {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly category: ICategoryVO
  readonly comments: IComment[]
  readonly createdAt: string
  readonly updatedAt: string
}
