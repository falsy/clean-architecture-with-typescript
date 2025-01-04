import IPost, { IRequestPostParams } from "domains/aggregates/interfaces/IPost"

export default interface IPostPresenter {
  getSummaryPosts(): Promise<IPost[]>
  getDetailPost(postId: string): Promise<IPost>
  getPostSummary(postId: string): Promise<IPost>
  createPost(params: IRequestPostParams): Promise<boolean>
  editPost(postId: string, params: IRequestPostParams): Promise<boolean>
  deletePost(postId: string): Promise<boolean>
  createComment(postId: string, content: string): Promise<boolean>
  editComment(commentId: string, content: string): Promise<boolean>
  deleteComment(commentId: string): Promise<boolean>
}
