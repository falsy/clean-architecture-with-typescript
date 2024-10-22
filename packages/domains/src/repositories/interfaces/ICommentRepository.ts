import { ICommentDTO } from "../../dtos/interfaces"

export default interface ICommentRepository {
  getComments(postId: string): Promise<ICommentDTO[]>
  createComment(postId: string, content: string): Promise<boolean>
  editComment(commentId: string, content: string): Promise<boolean>
  deleteComment(commentId: string): Promise<boolean>
}
