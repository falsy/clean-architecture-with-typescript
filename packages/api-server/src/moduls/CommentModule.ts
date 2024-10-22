import { Module } from "@nestjs/common"
import CommentUseCase from "../useCases/CommentUseCase"
import CommentController from "../controllers/CommentController"
import CommentRepository from "../repositories/CommentRepository"

@Module({
  imports: [],
  providers: [
    {
      provide: "ICommentRepository",
      useClass: CommentRepository
    },
    CommentUseCase
  ],
  controllers: [CommentController]
})
export default class CommentModule {}
