import ICommentDTO from "domains/dtos/interfaces/ICommentDTO"

export default interface ICommentRepository {
  getComments(postId: string): Promise<ICommentDTO[]>
  createComment(postId: string, content: string): Promise<boolean>
  updateComment(commentId: string, content: string): Promise<string>
  deleteComment(commentId: string): Promise<boolean>
}
