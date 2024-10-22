import { Module } from "@nestjs/common"
import PostRepository from "../repositories/PostRepository"
import PostUseCase from "../useCases/PostUseCase"
import PostController from "../controllers/PostController"

@Module({
  imports: [],
  providers: [
    {
      provide: "IPostRepository",
      useClass: PostRepository
    },
    PostUseCase
  ],
  controllers: [PostController]
})
export default class PostModule {}
