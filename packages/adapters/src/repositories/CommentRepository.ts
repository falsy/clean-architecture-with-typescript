import { ICommentDTO, ICommentRepository } from "domains"
import { IClientHTTP } from "../infrastructures"
import { CommentDTO } from "../dtos"

export default class CommentRepository implements ICommentRepository {
  private client: IClientHTTP

  constructor(client: IClientHTTP) {
    this.client = client
  }

  async getComments(postId: string): Promise<ICommentDTO[]> {
    try {
      const { data } = await this.client.get<ICommentDTO[]>(
        `/posts/${postId}/comments`
      )

      return data.map((comment) => {
        return new CommentDTO(comment)
      })
    } catch (e) {
      console.error(e)
    }
  }

  async createComment(postId: string, content: string): Promise<boolean> {
    try {
      const { data } = await this.client.post<boolean>(
        `/posts/${postId}/comments`,
        {
          content
        }
      )

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async editComment(commentId: string, content: string): Promise<boolean> {
    try {
      const { data } = await this.client.put<boolean>(
        `/comments/${commentId}`,
        {
          content
        }
      )

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async deleteComment(commentId: string): Promise<boolean> {
    try {
      const { data } = await this.client.delete<boolean>(
        `/comments/${commentId}`
      )

      return data
    } catch (e) {
      console.error(e)
    }
  }
}
