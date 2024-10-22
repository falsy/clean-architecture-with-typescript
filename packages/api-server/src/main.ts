import { NestFactory } from "@nestjs/core"
import { AppModule } from "./moduls/AppModule"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: "*"
  })

  await app.listen(2000)
}

bootstrap()
