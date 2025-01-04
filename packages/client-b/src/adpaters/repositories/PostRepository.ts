import IPostDTO from "domains/dtos/interfaces/IPostDTO"
import IPostRepository from "domains/repositories/interfaces/IPostRepository"
import { IRequestPostParams } from "domains/aggregates/interfaces/IPost"
import UserInfoVO from "domains/vos/UserInfoVO"
import PostDTO from "adapters/dtos/PostDTO"

export default class PostRepository implements IPostRepository {
  async getPosts(): Promise<IPostDTO[]> {
    try {
      const data = window.localStorage.getItem("posts")
      const parseData: IPostDTO[] = data ? JSON.parse(data) : []

      return parseData.map((post) => {
        return new PostDTO(post)
      })
    } catch (e) {
      console.error(e)
    }
  }

  async getPost(postId: string): Promise<IPostDTO> {
    try {
      const data = window.localStorage.getItem("posts")
      const parseData: IPostDTO[] = data ? JSON.parse(data) : []
      const findPost = parseData.find((post) => post.id === postId)

      return new PostDTO(findPost)
    } catch (e) {
      console.error(e)
    }
  }

  async createPost(params: IRequestPostParams): Promise<boolean> {
    try {
      const newPost = new PostDTO({
        id: String(Date.now()),
        title: params.title,
        content: params.content,
        author: new UserInfoVO({
          userId: "1",
          userName: "falsy"
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      })
      const data = window.localStorage.getItem("posts")
      const parseData: IPostDTO[] = data ? JSON.parse(data) : []

      window.localStorage.setItem(
        "posts",
        JSON.stringify([...parseData, newPost])
      )

      return true
    } catch (e) {
      console.error(e)
    }
  }

  async editPost(postId: string, params: IRequestPostParams): Promise<boolean> {
    try {
      const data = window.localStorage.getItem("posts")
      const parseData: IPostDTO[] = data ? JSON.parse(data) : []
      const findIndex = parseData.findIndex((post) => post.id === postId)

      parseData[findIndex].title = params.title
      parseData[findIndex].content = params.content
      parseData[findIndex].updatedAt = new Date()

      window.localStorage.setItem("posts", JSON.stringify(parseData))

      return true
    } catch (e) {
      console.error(e)
    }
  }

  async deletePost(postId: string): Promise<boolean> {
    try {
      const data = window.localStorage.getItem("posts")
      const parseData: IPostDTO[] = data ? JSON.parse(data) : []
      const filter = parseData.filter((post) => post.id !== postId)

      window.localStorage.setItem("posts", JSON.stringify(filter))

      return true
    } catch (e) {
      console.error(e)
    }
  }
}
