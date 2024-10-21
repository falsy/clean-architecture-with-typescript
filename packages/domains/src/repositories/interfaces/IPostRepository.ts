import { IRequestPostParams } from "../../aggregates"
import { IPostDTO } from "../../dtos/interfaces"

export default interface IPostRepository {
  getPosts(): Promise<IPostDTO[]>
  getPost(postId: string): Promise<IPostDTO>
  createPost(params: IRequestPostParams): Promise<boolean>
  editPost(postId: string, params: IRequestPostParams): Promise<boolean>
  deletePost(postId: string): Promise<boolean>
}
