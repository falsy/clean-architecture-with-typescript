import IPost, { IRequestPostParams } from "domains/aggregates/interfaces/IPost"
import Post from "domains/aggregates/Post"
import Comment from "domains/entities/Comment"
import UserInfoVO from "domains/vos/UserInfoVO"
import IPostDTO from "domains/dtos/interfaces/IPostDTO"
import ICommentRepository from "../repositories/interfaces/ICommentRepository"
import IPostRepository from "../repositories/interfaces/IPostRepository"
import IPostUseCase from "./interfaces/IPostUseCase"

export default class PostUseCase implements IPostUseCase {
  private postRepository: IPostRepository
  private commentRepository: ICommentRepository

  constructor(
    postRepository: IPostRepository,
    commentRepository: ICommentRepository
  ) {
    this.postRepository = postRepository
    this.commentRepository = commentRepository
  }

  async getSummaryPosts(): Promise<IPost[]> {
    const posts = await this.postRepository.getPosts()

    return posts.map((post: IPostDTO) => {
      return new Post({
        id: post.id,
        title: post.title,
        content: post.content,
        author: new UserInfoVO(post.author),
        comments: [],
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      })
    })
  }

  async getDetailPost(postId: string): Promise<IPost> {
    const [post, comments] = await Promise.all([
      this.postRepository.getPost(postId),
      this.commentRepository.getComments(postId)
    ])

    return new Post({
      id: post.id,
      title: post.title,
      content: post.content,
      author: new UserInfoVO(post.author),
      comments: comments.map((comment) => {
        return new Comment({
          id: comment.id,
          postId: comment.postId,
          author: new UserInfoVO(comment.author),
          content: comment.content,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt
        })
      }),
      createdAt: post.createdAt,
      updatedAt: post.updatedAt
    })
  }

  async getPostSummary(postId: string): Promise<IPost> {
    const post = await this.postRepository.getPost(postId)

    return new Post({
      id: post.id,
      title: post.title,
      content: post.content,
      author: new UserInfoVO(post.author),
      comments: [],
      createdAt: post.createdAt,
      updatedAt: post.updatedAt
    })
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

  createComment(postId: string, content: string): Promise<boolean> {
    return this.commentRepository.createComment(postId, content)
  }

  editComment(commentId: string, content: string): Promise<boolean> {
    return this.commentRepository.editComment(commentId, content)
  }

  deleteComment(commentId: string): Promise<boolean> {
    return this.commentRepository.deleteComment(commentId)
  }
}
