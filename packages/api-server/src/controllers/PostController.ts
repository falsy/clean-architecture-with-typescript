import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { IPostDTO } from "domains"
import PostUseCase from "../useCases/PostUseCase"

@Controller("")
export default class PostController {
  constructor(private postUseCase: PostUseCase) {}

  @Get("posts")
  getPosts(): Promise<IPostDTO[]> {
    return this.postUseCase.getPosts()
  }

  @Get("posts/:postId")
  getPost(@Param("postId") postId: string): Promise<IPostDTO> {
    return this.postUseCase.getPost(postId)
  }

  @Post("posts")
  createPost(
    @Body("title") title: string,
    @Body("content") content: string
  ): Promise<boolean> {
    return this.postUseCase.createPost({
      title,
      content
    })
  }

  @Put("posts/:postId")
  editPost(
    @Param("postId") postId: string,
    @Body("title") title: string,
    @Body("content") content: string
  ): Promise<boolean> {
    return this.postUseCase.editPost(postId, {
      title,
      content
    })
  }

  @Delete("posts/:postId")
  deletePost(@Param("postId") postId: string): Promise<boolean> {
    return this.postUseCase.deletePost(postId)
  }
}
