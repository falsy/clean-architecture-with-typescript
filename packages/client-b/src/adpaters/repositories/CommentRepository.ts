import ICommentRepository from "domains/repositories/interfaces/ICommentRepository"
import ICommentDTO from "domains/dtos/interfaces/ICommentDTO"
import UserInfoVO from "domains/vos/UserInfoVO"
import CommentDTO from "adapters/dtos/CommentDTO"

export default class CommentRepository implements ICommentRepository {
  async getComments(postId: string): Promise<ICommentDTO[]> {
    try {
      const data = window.localStorage.getItem("comments")
      const parseData: ICommentDTO[] = data ? JSON.parse(data) : []
      const filter = parseData.filter((comment) => comment.postId === postId)

      return filter.map((comment) => {
        return new CommentDTO(comment)
      })
    } catch (e) {
      console.error(e)
    }
  }

  async createComment(postId: string, content: string): Promise<boolean> {
    try {
      const newComment = new CommentDTO({
        id: String(Date.now()),
        postId,
        content,
        author: new UserInfoVO({
          userId: "1",
          userName: "falsy"
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      })
      const data = window.localStorage.getItem("comments")
      const parseData: ICommentDTO[] = data ? JSON.parse(data) : []

      window.localStorage.setItem(
        "comments",
        JSON.stringify([...parseData, newComment])
      )

      return true
    } catch (e) {
      console.error(e)
    }
  }

  async editComment(commentId: string, content: string): Promise<boolean> {
    try {
      const data = window.localStorage.getItem("comments")
      const parseData: ICommentDTO[] = data ? JSON.parse(data) : []
      const findIndex = parseData.findIndex(
        (comment) => comment.id === commentId
      )

      parseData[findIndex].content = content
      parseData[findIndex].updatedAt = new Date()

      window.localStorage.setItem("comments", JSON.stringify(parseData))

      return true
    } catch (e) {
      console.error(e)
    }
  }

  async deleteComment(commentId: string): Promise<boolean> {
    try {
      const data = window.localStorage.getItem("comments")
      const parseData: ICommentDTO[] = data ? JSON.parse(data) : []
      const filter = parseData.filter((comment) => comment.id !== commentId)

      window.localStorage.setItem("comments", JSON.stringify(filter))

      return true
    } catch (e) {
      console.error(e)
    }
  }
}
