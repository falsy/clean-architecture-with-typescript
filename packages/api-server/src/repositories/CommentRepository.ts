import { Injectable } from "@nestjs/common"
import { ICommentDTO, ICommentRepository, UserInfoVO } from "domains"
import { CommentDTO } from "adapters"

@Injectable()
export default class CommentRepository implements ICommentRepository {
  private comments: ICommentDTO[] = []

  getComments(postId: string): Promise<ICommentDTO[]> {
    return new Promise((resolve) => {
      resolve(this.comments.filter((comment) => comment.postId === postId))
    })
  }

  createComment(postId: string, content: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.comments.push(
        new CommentDTO({
          id: String(Date.now()),
          postId,
          content,
          author: new UserInfoVO({
            userId: "1",
            userName: "sample"
          }),
          createdAt: new Date(),
          updatedAt: new Date()
        })
      )

      resolve(true)
    })
  }

  editComment(commentId: string, content: string): Promise<boolean> {
    return new Promise((resolve) => {
      const commentIndex = this.comments.findIndex(
        (comment) => comment.id === commentId
      )

      this.comments[commentIndex] = new CommentDTO({
        id: commentId,
        postId: this.comments[commentIndex].postId,
        content,
        author: this.comments[commentIndex].author,
        createdAt: this.comments[commentIndex].createdAt,
        updatedAt: new Date()
      })

      resolve(true)
    })
  }

  deleteComment(commentId: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      )

      resolve(true)
    })
  }
}
