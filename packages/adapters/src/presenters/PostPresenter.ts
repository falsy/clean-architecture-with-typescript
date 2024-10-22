import { IPost, IPostUseCase, IRequestPostParams } from "domains"
import { IPostPresenter } from "./index"

export default class PostPresenter implements IPostPresenter {
  private postUseCase: IPostUseCase

  constructor(postUseCase: IPostUseCase) {
    this.postUseCase = postUseCase
  }

  getSummaryPosts(): Promise<IPost[]> {
    return this.postUseCase.getSummaryPosts()
  }

  getDetailPost(postId: string): Promise<IPost> {
    return this.postUseCase.getDetailPost(postId)
  }

  getPostSummary(postId: string): Promise<IPost> {
    return this.postUseCase.getPostSummary(postId)
  }

  createPost(params: IRequestPostParams): Promise<boolean> {
    return this.postUseCase.createPost(params)
  }

  editPost(postId: string, params: IRequestPostParams): Promise<boolean> {
    return this.postUseCase.editPost(postId, params)
  }

  deletePost(postId: string): Promise<boolean> {
    return this.postUseCase.deletePost(postId)
  }

  createComment(postId: string, content: string): Promise<boolean> {
    return this.postUseCase.createComment(postId, content)
  }

  editComment(commentId: string, content: string): Promise<boolean> {
    return this.postUseCase.editComment(commentId, content)
  }

  deleteComment(commentId: string): Promise<boolean> {
    return this.postUseCase.deleteComment(commentId)
  }
}
