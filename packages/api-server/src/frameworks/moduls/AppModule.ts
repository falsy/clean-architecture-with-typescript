import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { AppController } from "../controllers/AppController"
import TrackerModule from "./TrackerModule"
import CarrierModule from "./CarrierModule"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true
    }),
    TrackerModule,
    CarrierModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
