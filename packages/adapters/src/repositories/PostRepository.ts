import IPostRepository from "domains/repositories/interfaces/IPostRepository"
import { IRequestPostParams } from "domains/aggregates/interfaces/IPost"
import UserInfoVO from "domains/vos/UserInfoVO"
import IPostDTO from "domains/dtos/interfaces/IPostDTO"
import { IClientHTTP } from "../infrastructures/interfaces/IClientHTTP"
import PostDTO from "../dtos/PostDTO"

export default class PostRepository implements IPostRepository {
  private client: IClientHTTP

  constructor(client: IClientHTTP) {
    this.client = client
  }

  async getPosts(): Promise<IPostDTO[]> {
    try {
      const { data } = await this.client.get<IPostDTO[]>("/api/posts")
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
      const { data } = await this.client.get<IPostDTO>(`/api/posts/${postId}`)

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
      const { data } = await this.client.post<boolean>("/api/posts", params)

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async updatePost(
    postId: string,
    params: IRequestPostParams
  ): Promise<string> {
    try {
      const { data } = await this.client.put<string>(
        `/api/posts/${postId}`,
        params
      )

      return data
    } catch (e) {
      console.error(e)
    }
  }

  async deletePost(postId: string): Promise<boolean> {
    try {
      const { data } = await this.client.delete<boolean>(`/api/posts/${postId}`)

      return data
    } catch (e) {
      console.error(e)
    }
  }
}
