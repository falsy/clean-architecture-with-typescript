import {
  IPostDTO,
  IPostRepository,
  IRequestPostParams,
  UserInfoVO
} from "domains"
import { ClientHTTP } from "../infrastructures"
import { PostDTO } from "../dtos"

export default class PostRepository implements IPostRepository {
  private client: ClientHTTP

  constructor() {
    this.client = new ClientHTTP("http://localhost:2000")
  }

  async getPosts(): Promise<IPostDTO[]> {
    try {
      const { data } = await this.client.get<IPostDTO[]>("/posts")
      return data.map((post) => {
        return new PostDTO({
          id: post.id,
          title: post.title,
          content: post.content,
          author: new UserInfoVO(post.author),
          createdAt: post.createdAt,
          updatedAt: post.updatedAt
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  async getPost(postId: string): Promise<IPostDTO> {
    try {
      const { data } = await this.client.get<IPostDTO>(`/posts/${postId}`)

      return new PostDTO({
        id: data.id,
        title: data.title,
        content: data.content,
        author: new UserInfoVO(data.author),
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      })
    } catch (e) {
      console.error(e)
    }
  }

  async createPost(params: IRequestPostParams): Promise<boolean> {
    try {
      const { data } = await this.client.post<boolean>("/posts", params)

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async editPost(postId: string, params: IRequestPostParams): Promise<boolean> {
    try {
      const { data } = await this.client.put<boolean>(
        `/posts/${postId}`,
        params
      )

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async deletePost(postId: string): Promise<boolean> {
    try {
      const { data } = await this.client.delete<boolean>(`/posts/${postId}`)

      return data
    } catch (e) {
      console.error(e)
    }
  }
}
