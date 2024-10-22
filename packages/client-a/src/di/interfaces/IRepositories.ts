import { ICommentRepository, IPostRepository, IUserRepository } from "domains"

export default interface IRepositories {
  post: IPostRepository
  comment: ICommentRepository
  user: IUserRepository
}
