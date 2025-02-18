import IPost, { IRequestPostParams } from "domains/aggregates/interfaces/IPost"

export default interface IPostPresenter {
  getPosts(): Promise<IPost[]>
  getPost(postId: string): Promise<IPost>
  createPost(params: IRequestPostParams): Promise<boolean>
  updatePost(postId: string, params: IRequestPostParams): Promise<string>
  deletePost(postId: string): Promise<boolean>
  createComment(postId: string, content: string): Promise<boolean>
  updateComment(commentId: string, content: string): Promise<string>
  deleteComment(commentId: string): Promise<boolean>
}
