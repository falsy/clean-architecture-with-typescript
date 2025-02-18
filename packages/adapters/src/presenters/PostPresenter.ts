import IPost, { IRequestPostParams } from "domains/aggregates/interfaces/IPost"
import IPostUseCase from "domains/useCases/interfaces/IPostUseCase"
import IPostPresenter from "./interfaces/IPostPresenter"

export default class PostPresenter implements IPostPresenter {
  private postUseCase: IPostUseCase

  constructor(postUseCase: IPostUseCase) {
    this.postUseCase = postUseCase
  }

  getPosts(): Promise<IPost[]> {
    return this.postUseCase.getPosts()
  }

  getPost(postId: string): Promise<IPost> {
    return this.postUseCase.getPost(postId)
  }

  createPost(params: IRequestPostParams): Promise<boolean> {
    return this.postUseCase.createPost(params)
  }

  updatePost(postId: string, params: IRequestPostParams): Promise<string> {
    return this.postUseCase.updatePost(postId, params)
  }

  deletePost(postId: string): Promise<boolean> {
    return this.postUseCase.deletePost(postId)
  }

  createComment(postId: string, content: string): Promise<boolean> {
    return this.postUseCase.createComment(postId, content)
  }

  updateComment(commentId: string, content: string): Promise<string> {
    return this.postUseCase.updateComment(commentId, content)
  }

  deleteComment(commentId: string): Promise<boolean> {
    return this.postUseCase.deleteComment(commentId)
  }
}
