import { Inject, Injectable } from "@nestjs/common"
import { IPostDTO, IPostRepository, IRequestPostParams } from "domains"

@Injectable()
export default class PostUseCase {
  constructor(
    @Inject("IPostRepository") private postRepository: IPostRepository
  ) {}

  getPosts(): Promise<IPostDTO[]> {
    return this.postRepository.getPosts()
  }

  getPost(postId: string): Promise<IPostDTO> {
    return this.postRepository.getPost(postId)
  }

  createPost(params: IRequestPostParams): Promise<boolean> {
    return this.postRepository.createPost(params)
  }

  editPost(postId: string, params: IRequestPostParams): Promise<boolean> {
    return this.postRepository.editPost(postId, params)
  }

  deletePost(postId: string): Promise<boolean> {
    return this.postRepository.deletePost(postId)
  }
}
