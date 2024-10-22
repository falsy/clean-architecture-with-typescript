import { Inject, Injectable } from "@nestjs/common"
import { ICommentDTO, ICommentRepository } from "domains"

@Injectable()
export default class CommentUseCase {
  constructor(
    @Inject("ICommentRepository") private commentRepository: ICommentRepository
  ) {}

  getComments(postId: string): Promise<ICommentDTO[]> {
    return this.commentRepository.getComments(postId)
  }
  createComment(postId: string, content: string): Promise<boolean> {
    return this.commentRepository.createComment(postId, content)
  }
  editComment(commentId: string, content: string): Promise<boolean> {
    return this.commentRepository.editComment(commentId, content)
  }
  deleteComment(commentId: string): Promise<boolean> {
    return this.commentRepository.deleteComment(commentId)
  }
}
