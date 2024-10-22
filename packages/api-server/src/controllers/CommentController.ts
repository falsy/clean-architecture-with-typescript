import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { ICommentDTO } from "domains"
import CommentUseCase from "../useCases/CommentUseCase"

@Controller("")
export default class CommentController {
  constructor(private commentUseCase: CommentUseCase) {}

  @Get("comments")
  getComments(@Param("postId") postId: string): Promise<ICommentDTO[]> {
    return this.commentUseCase.getComments(postId)
  }

  @Post("comments")
  createComment(
    @Body("postId") postId: string,
    @Body("content") content: string
  ): Promise<boolean> {
    return this.commentUseCase.createComment(postId, content)
  }

  @Put("comments/:commentId")
  editComment(
    @Param("commentId") commentId: string,
    @Body("content") content: string
  ): Promise<boolean> {
    return this.commentUseCase.editComment(commentId, content)
  }

  @Delete("comments/:commentId")
  deleteComment(@Param("commentId") commentId: string): Promise<boolean> {
    return this.commentUseCase.deleteComment(commentId)
  }
}
