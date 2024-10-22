import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "../controllers/AppController"
import UserModule from "./UserModule"
import PostModule from "./PostModule"
import CommentModule from "./CommentModule"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    PostModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
