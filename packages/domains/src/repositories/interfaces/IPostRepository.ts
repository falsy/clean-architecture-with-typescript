import { IRequestPostParams } from "domains/aggregates/interfaces/IPost"
import IPostDTO from "domains/dtos/interfaces/IPostDTO"

export default interface IPostRepository {
  getPosts(): Promise<IPostDTO[]>
  getPost(postId: string): Promise<IPostDTO>
  createPost(params: IRequestPostParams): Promise<boolean>
  updatePost(postId: string, params: IRequestPostParams): Promise<string>
  deletePost(postId: string): Promise<boolean>
}
