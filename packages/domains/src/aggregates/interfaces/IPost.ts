import { IComment } from "../../entities"
import { IUserInfoVO } from "../../vos"

export default interface IPost {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly comments: IComment[]
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface IPostParams {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly comments: IComment[]
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface IRequestPostParams {
  readonly title: string
  readonly content: string
}
