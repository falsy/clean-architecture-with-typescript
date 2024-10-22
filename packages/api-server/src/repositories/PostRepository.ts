import { Injectable } from "@nestjs/common"
import {
  IPostDTO,
  IPostRepository,
  IRequestPostParams,
  UserInfoVO
} from "domains"
import { PostDTO } from "adapters"

@Injectable()
export default class PostRepository implements IPostRepository {
  private posts: IPostDTO[] = []

  getPosts(): Promise<IPostDTO[]> {
    return new Promise((resolve) => {
      resolve(
        this.posts.map((post) => {
          return new PostDTO(post)
        })
      )
    })
  }

  getPost(postId: string): Promise<IPostDTO> {
    return new Promise((resolve) => {
      const post = this.posts.find((post) => post.id === postId)
      resolve(new PostDTO(post))
    })
  }

  createPost(params: IRequestPostParams): Promise<boolean> {
    return new Promise((resolve) => {
      this.posts.push(
        new PostDTO({
          id: String(Date.now()),
          title: params.title,
          content: params.content,
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

  editPost(postId: string, params: IRequestPostParams): Promise<boolean> {
    return new Promise((resolve) => {
      const postIndex = this.posts.findIndex((post) => post.id === postId)

      this.posts[postIndex] = new PostDTO({
        id: postId,
        title: params.title,
        content: params.content,
        author: this.posts[postIndex].author,
        createdAt: this.posts[postIndex].createdAt,
        updatedAt: new Date()
      })

      resolve(true)
    })
  }

  deletePost(postId: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.posts = this.posts.filter((post) => post.id !== postId)

      resolve(true)
    })
  }
}
