import { Module } from "@nestjs/common";
import { NotificationGateway } from "./gateway/notification.gateway";
import { UserService } from "../user/user.service";
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";

@Module({
  providers: [NotificationGateway, UserService, NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule { }