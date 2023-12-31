import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FriendshipStatus } from "@prisma/client";
import { NotificationGateway } from "src/notification/gateway/notification.gateway";


@Injectable()
export class FriendshipService {
  constructor(private prisma: PrismaService, private notificationGateway : NotificationGateway) { }

  async makeRequest(senderId: string, receiverId: string): Promise<any> {
    try {
      if (senderId === receiverId) {
        throw new BadRequestException("You can't send a friend request to yourself");
      }
      const existingRelationship = await this.prisma.friendship.findFirst({
        where: {
          OR: [
            { senderId: senderId, receiverId: receiverId, },
            { senderId: receiverId, receiverId: senderId },
          ],
        },
      });
      if (existingRelationship && existingRelationship.status === FriendshipStatus.ACCEPTED) {
        this.notificationGateway.apiError(senderId, "You're already friends with this user");
        throw new ConflictException("You're already friends with this user");
      }
      else if (existingRelationship && existingRelationship.status === FriendshipStatus.PENDING) {
        this.notificationGateway.apiError(senderId, "You've already sent a friend request to this user");
        throw new ConflictException("You've already sent a friend request to this user");
      }
      else if (existingRelationship && existingRelationship.status === FriendshipStatus.BLOCKED) {
        this.notificationGateway.apiError(senderId, "This user is blocked");
        throw new ConflictException("You've blocked this user");
      }
      await this.prisma.friendship.create({
        data: {
          senderId,
          receiverId,
          status: FriendshipStatus.PENDING,
          actionUserId: senderId,
        },
      });
      const sender = await this.prisma.profile.findUnique({ where: { userId: senderId } });
      const notification = await this.prisma.notification.create({
        data: {
          userId: receiverId,
          type: "FRIEND_REQUEST",
          message: "You have a new friend request",
          actionUserId: senderId,
          actionUserName:  sender.firstName + " " + sender.lastName,
          actionUserAvatar: sender.avatar,
        },
      });
      this.notificationGateway.friendRequest(senderId, receiverId);
      return ;
    } catch (error) {

    }
  }

  async acceptRequest(senderId: string, receiverId: string, notid : string): Promise<void> {
    try {
      const friendship = await this.prisma.friendship.findFirst({
        where: {
          senderId,
          receiverId,
        },
      });
      if (!friendship)
        throw new BadRequestException("You have no friend request from this user");
      else if (friendship.status === FriendshipStatus.BLOCKED && friendship.actionUserId === receiverId)
      {
        await this.prisma.notification.delete({where: { id: notid },});
        this.notificationGateway.apiError(receiverId, "You've blocked this user");
        this.notificationGateway.sendRefresh();
        throw new ConflictException("You've blocked this user");
      }
      else if (friendship.status === FriendshipStatus.BLOCKED && friendship.actionUserId === senderId)
      {
        this.notificationGateway.apiError(receiverId, "This user has blocked you");
        await this.prisma.notification.delete({where: { id: notid },});
        this.notificationGateway.sendRefresh();
        throw new ConflictException("This user has blocked you");
      }
      else if (friendship.status === FriendshipStatus.ACCEPTED)
        throw new ConflictException("You're already friends with this user");
      await this.prisma.friendship.update({
        where: {
            id: friendship.id,
        },
        data: {
          status: FriendshipStatus.ACCEPTED,
          actionUserId: receiverId,
        },
      });
      await this.prisma.notification.delete({where: { id: notid },});
      this.notificationGateway.acceptFriendRequest(senderId, receiverId);
    } catch (error) {
    }
  }

  async refuseRequest(senderId: string, receiverId: string, notid : string): Promise<void> {
    try {
      const friendship = await this.prisma.friendship.findFirst({
        where: {
          senderId,
          receiverId,
        },
      });
      if (!friendship)
        throw new BadRequestException("You have no friend request from this user");
      else if (friendship.status === FriendshipStatus.ACCEPTED)
        throw new ConflictException("You're already friends with this user");
      else if (friendship.status === FriendshipStatus.BLOCKED && friendship.actionUserId === receiverId)
      {
        this.notificationGateway.apiError(receiverId, "You've blocked this user");
        this.notificationGateway.sendRefresh();
        throw new ConflictException("You've blocked this user");
      }
      else if (friendship.status === FriendshipStatus.BLOCKED && friendship.actionUserId === senderId)
      {
        this.notificationGateway.apiError(receiverId, "This user has blocked you");
        this.notificationGateway.sendRefresh();
        throw new ConflictException("This user has blocked you");
      }
      await this.prisma.friendship.delete({
        where: {
          id: friendship.id,
        }
      });
      await this.prisma.notification.delete({
        where: {
          id: notid,
        },
      });
      this.notificationGateway.refuseFriendRequest(senderId, receiverId);
    } catch (error) {
        return  error;
    }
  }

  async showFriendship(senderId: string, receiverId: string): Promise<any> {
    try {
      const existingRelationship = await this.prisma.friendship.findFirst({
        where: {
          OR: [
            { senderId, receiverId },
            { senderId: receiverId, receiverId: senderId },
          ],
        },
      });
      let isFreind : boolean = false;
      if (existingRelationship && existingRelationship.status === FriendshipStatus.ACCEPTED) 
          return isFreind = true;
      return isFreind;
    } catch (error) {
        return  error;
    }
  }

  async getFriends(userId: string) {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        OR: [
          { senderId: userId, status: FriendshipStatus.ACCEPTED },
          { receiverId: userId, status: FriendshipStatus.ACCEPTED },
        ],
      },
      include: {
        sender: {
          select: { id: true, profile: true }, 
        },
        receiver: {
          select: { id: true, profile: true },
        },
      },
    });

    let friends = friendships.flatMap(friendship => {
      if (friendship.senderId === userId) {
        return friendship.receiver.profile;
      } else {
        return friendship.sender.profile;
      }
    });

    friends = friends.filter((friend, index, self) =>
    index === self.findIndex((t) => (t.userId === friend.userId)));

  return friends;
  }

  async getBlocked(userId: string) {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        OR: [
          { senderId: userId, status: FriendshipStatus.BLOCKED },
          { receiverId: userId, status: FriendshipStatus.BLOCKED },
        ],
      },
      include: {
        sender: {
          select: { id: true, profile: true }, 
        },
        receiver: {
          select: { id: true, profile: true },
        },
      },
    });

    let friends = friendships.flatMap(friendship => {
      if (friendship.senderId === userId) {
        return friendship.receiver.profile;
      } else {
        return friendship.sender.profile;
      }
    });

    // Deduplicate the friends by their id
    friends = friends.filter((friend, index, self) =>
      index === self.findIndex((t) => (t.userId === friend.userId)));
    const allUsersnames = friends.map(friend => friend.username);
    return allUsersnames;
  }

  async getRequests(userId: string) {

    const friendships = await this.prisma.friendship.findMany({
      where: {
        receiverId: userId,
        status: FriendshipStatus.PENDING,
      },
      include: {
        sender: {
          select: { id: true, profile: true },
        },
      },
    });

    return friendships.map(friendship => ({
      id: friendship.sender.id,
      profile: friendship.sender.profile,
    }));
  }

  async blockUser(blockerId: string, blockedId: string) : Promise<any> {
    try {

      const existingRelationship = await this.prisma.friendship.findFirst({
        where: {
          OR: [
            { senderId: blockerId, receiverId: blockedId },
            { senderId: blockedId, receiverId: blockerId },
          ],
        },
      });
      if (existingRelationship && existingRelationship.status === FriendshipStatus.BLOCKED) {
        this.notificationGateway.apiError(blockerId, "You've already blocked this user");
        return ("You've already blocked this user");
      }
      if (existingRelationship) {
        await this.prisma.friendship.update({
          where: { id: existingRelationship.id },
          data: { status: FriendshipStatus.BLOCKED, actionUserId: blockerId },
        });
        this.notificationGateway.blockUser(blockerId);
      } else {
        await this.prisma.friendship.create({
          data: {
            senderId: blockerId,
            receiverId: blockedId,
            status: FriendshipStatus.BLOCKED,
            actionUserId: blockerId,
          },
        });
        this.notificationGateway.blockUser(blockerId);
      }
    } catch (error) {
        return  error.message;
    }
    }

    async unblockUser(blockerId: string, blockedId: string): Promise<any>{
      try {
        const existingRelationship = await this.prisma.friendship.findFirst({
          where: {
            OR: [
              { senderId: blockerId, receiverId: blockedId },
              { senderId: blockedId, receiverId: blockerId },
            ],
          },
        });
        if (!existingRelationship) {
        this.notificationGateway.apiError(blockerId, "You have no relationship with this user");
        throw new BadRequestException("You have no relationship with this user");
      }
      if (existingRelationship.status !== FriendshipStatus.BLOCKED) {
        this.notificationGateway.apiError(blockerId, "this user is not even blocked");
        throw new BadRequestException("this user is not even blocked");
      }
      await this.prisma.friendship.deleteMany({
        where: {
          OR: [
            { senderId: blockedId, receiverId: blockerId },
            { senderId: blockerId, receiverId: blockedId },
          ],
          status: FriendshipStatus.BLOCKED,
        },
      });
      this.notificationGateway.unblockUser(blockerId);
      return ("Unblocked");
    } catch (error) {
        return  error.message;
    }
    }

    async isUserBlocked(userId: string, potentialBlockerId: string) : Promise<boolean> {
      const blockedRelationship = await this.prisma.friendship.findFirst({
        where: {
          OR: [
            { senderId: potentialBlockerId, receiverId: userId },
            { senderId: userId, receiverId: potentialBlockerId },
          ],
          status: FriendshipStatus.BLOCKED,
        },
      });
      if (blockedRelationship)
        return true;
      else
        return false;
    }

    async amIBlocked(userId: string, potentialBlockerId: string) : Promise<boolean> {
      try {
        const blockedRelationship = await this.prisma.friendship.findFirst({
          where: {
            OR: [
              { senderId: potentialBlockerId, receiverId: userId },
              { senderId: userId, receiverId: potentialBlockerId },
            ],
            status: FriendshipStatus.BLOCKED,
          },
        });
        if (blockedRelationship && blockedRelationship.actionUserId === potentialBlockerId)
          return true;
        else
          return false;
      } catch (error) {
      }
    }
}