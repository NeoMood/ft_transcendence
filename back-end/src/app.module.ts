import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { userController } from "./user.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt-auth/jwt.strategy";
import { FortyTwoStrategy } from "./42auth/intra.strategy";
import { ChatModule } from "./chat/chat.module";
import { authController } from "./auth.controller";
import { GoogleStrategy } from "./google/google.starategy";

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: ["42", "google"]}),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1d" },
    }),
    ChatModule,
  ],
  controllers: [AppController, userController, authController],
  providers: [
    AppService,
    AuthService,
    UserService,
    JwtStrategy,
    GoogleStrategy,
    FortyTwoStrategy,
  ],
})
export class AppModule {}
