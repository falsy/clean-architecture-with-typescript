import { IComment } from "../../entities"
import { IUserInfoVO } from "../../vos"

export default interface IPost {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly comments: IComment[]
  readonly createdAt: string
  readonly updatedAt: string
}

export interface IPostParams {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly author: IUserInfoVO
  readonly comments: IComment[]
  readonly createdAt: string
  readonly updatedAt: string
}

export interface IRequestPostParams {
  readonly title: string
  readonly content: string
}
