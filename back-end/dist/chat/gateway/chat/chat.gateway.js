"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const SocketIO = require("socket.io");
const jwt = require("jsonwebtoken");
const jwt_decode_1 = require("jwt-decode");
const prisma_service_1 = require("../../../prisma/prisma.service");
const user_service_1 = require("../../../user.service");
let ChatGateway = exports.ChatGateway = class ChatGateway {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async handleConnection(client) {
        var _a, _b;
        console.log("client  √");
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const decoded = (0, jwt_decode_1.default)(token);
            client.join(decoded.username);
            const myChannels = await this.prisma.channels.findMany({
                where: {
                    Members: {
                        some: {
                            id: decoded.userId,
                        },
                    },
                },
            });
            myChannels.map((channel) => {
                client.join(channel.id);
            });
            if (((_b = this.server.sockets.adapter.rooms.get(decoded.username)) === null || _b === void 0 ? void 0 : _b.size) !== 1) {
                return;
            }
            await this.prisma.profile.update({
                where: {
                    userId: decoded.userId,
                },
                data: {
                    status: "online",
                },
            });
            this.server.emit("refresh");
        }
    }
    async handleDisconnect(client) {
        var _a;
        console.log("Disconnect  √");
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const decoded = (0, jwt_decode_1.default)(token);
            if (this.server.sockets.adapter.rooms.get(decoded.username) !== undefined)
                return;
            await this.prisma.profile.update({
                where: {
                    userId: decoded.userId,
                },
                data: {
                    status: "offline",
                },
            });
            this.server.emit("refresh");
        }
    }
    async handlePrivetMessage(_client, payload) {
        const receiver = await this.prisma.user.findUnique({
            where: {
                username: payload.room,
            },
        });
        const sander = await this.prisma.user.findUnique({
            where: {
                username: payload.sander,
            },
        });
        const verifyBlock = await this.userService.isBlocked(receiver.id.toString(), sander.id.toString());
        if (verifyBlock.iBlocked || verifyBlock.heBlocked) {
            return;
        }
        await this.prisma.message.create({
            data: {
                fromId: sander.id,
                toId: receiver.id,
                content: payload.message.content,
                userId: sander.id,
            },
        });
        await this.prisma.message.create({
            data: {
                fromId: sander.id,
                toId: receiver.id,
                content: payload.message.content,
                userId: receiver.id,
            },
        });
        this.server.to(payload.room).emit("privet-message", payload.message);
        this.server.to(payload.sander).emit("privet-message", payload.message);
        this.server.emit("refresh");
    }
    async handleBlockUser(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        }
        catch (err) {
            return;
        }
        if (token) {
            await this.prisma.BlockList.create({
                data: {
                    userId: payload.userId,
                    blockedId: payload.blockedId,
                },
            });
            this.server.emit("refresh");
        }
    }
    async handleUnblockUser(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        }
        catch (err) {
            console.log("err : ", err.message);
            return;
        }
        if (token) {
            const userList = await this.prisma.BlockList.findMany({
                where: {
                    userId: payload.userId,
                },
            });
            userList.map(async (blockTable) => {
                if (blockTable.blockedId === payload.blockedId) {
                    await this.prisma.BlockList.delete({
                        where: {
                            id: blockTable.id,
                        },
                    });
                }
            });
            this.server.emit("refresh");
        }
    }
    async handleCreateGroup(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        }
        catch (err) {
            console.log("err : ", err.message);
            return;
        }
        if (token) {
            const decoded = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    username: decoded.username,
                },
            });
            const verifyName = await this.prisma.channels.findMany({
                where: {
                    name: payload.groupName,
                },
            });
            if (verifyName[0]) {
                this.server.to(user.username).emit("errorNotif", { message: `you already have a group with this name`, type: false });
                return;
            }
            payload.groupUsers.push(user.id);
            await this.prisma.channels.create({
                data: {
                    type: payload.groupType,
                    name: payload.groupName,
                    password: payload.protectedPassword,
                    userId: user.id,
                    Members: {
                        connect: payload.groupUsers.map((id) => ({ id })),
                    },
                    Owners: {
                        connect: {
                            id: user.id,
                        },
                    },
                    avatar: "",
                },
            });
            const channel = await this.prisma.channels.findUnique({
                where: {
                    name: payload.groupName,
                },
                include: {
                    Members: true,
                },
            });
            console.log("channel : ", channel);
            channel.Members.map((member) => {
                const userSocket = this.server.sockets.adapter.rooms.get(member.username);
                if (userSocket) {
                    userSocket.forEach((socketId) => {
                        this.server.sockets.sockets.get(socketId).join(channel.id);
                    });
                }
            });
            this.server.emit("refresh");
            this.server.to(user.username).emit("errorNotif", { message: `group created`, type: true });
        }
    }
    async handleRefresh(client, payload) {
        var _a;
        const jwt = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (jwt) {
            console.log("refresh : ", "done");
            this.server.emit("refresh", payload);
        }
    }
    async handleMessageToGroup(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Muts: true,
                    Band: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                return;
            }
            const verifyMuts = group.Muts.some((mut) => {
                return mut.id === +user.id;
            });
            if (verifyMuts) {
                const mut = await this.prisma.Muted.findMany({
                    where: {
                        userId: user.id,
                        channelId: group.id,
                    },
                });
                const date = new Date();
                const timeOffMute = new Date(mut[0].timeOffMute);
                if (timeOffMute <= date) {
                    await this.prisma.Muted.delete({
                        where: {
                            id: mut[0].id,
                        },
                    });
                    await this.prisma.user.update({
                        where: {
                            id: user.id,
                        },
                        data: {
                            channelsMuts: {
                                disconnect: {
                                    id: group.id,
                                },
                            },
                        },
                    });
                }
                else {
                    this.server.to(user.username).emit("errorNotif", { message: `you are muted `, type: false });
                    return;
                }
            }
            const verifyBand = group.Band.some((ban) => {
                return ban.id === +user.id;
            });
            if (verifyBand) {
                this.server.to(user.username).emit("errorNotif", { message: `you are banned from this group`, type: false });
                return;
            }
            await this.prisma.message.create({
                data: {
                    fromName: user.username,
                    content: payload.message.content,
                    channelsId: group.id,
                },
            });
            console.log("sockets id in room : ", this.server.sockets.adapter.rooms.get(payload.groupId));
            this.server.to(payload.groupId).emit("message-to-group", payload.message);
            console.log("message-to-group : ", payload.message.content, " to : ", payload.groupId);
            this.server.emit("refresh");
        }
    }
    async handleExitGroup(client, payload) {
        var _a;
        const jwt = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (jwt) {
            const info = (0, jwt_decode_1.default)(jwt);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Band: true,
                    Owners: true,
                    Admins: true,
                    Muts: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to leave this group`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            if (verifyOwner && group.Owners.length === 1) {
                if (group.Members.length !== 1) {
                    let newOwner = group.Members[group.Members.length - 1];
                    if (newOwner.id === user.id) {
                        newOwner = group.Members[0];
                    }
                    await this.prisma.user.update({
                        where: {
                            id: newOwner.id,
                        },
                        data: {
                            channelsOwner: {
                                connect: {
                                    id: group.id,
                                },
                            },
                        },
                    });
                    await this.prisma.channels.update({
                        where: {
                            id: group.id,
                        },
                        data: {
                            Owners: {
                                disconnect: {
                                    id: user.id,
                                },
                            },
                            Members: {
                                disconnect: {
                                    id: user.id,
                                },
                            },
                        },
                    });
                    this.server.to(user.username).emit("errorNotif", { message: `you left this group and a new owner is selected`, type: true });
                }
                else {
                    await this.prisma.channels.delete({
                        where: {
                            id: group.id,
                        },
                    });
                    this.server.to(user.username).emit("errorNotif", { message: `you left this group and it is deleted`, type: true });
                }
                this.server.emit("refresh");
                return;
            }
            const verifyAdmin = group.Admins.some((admin) => {
                return admin.id === +user.id;
            });
            const verifyMuts = group.Muts.some((mut) => {
                return mut.id === +user.id;
            });
            if (verifyMuts) {
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        channelsMuts: {
                            disconnect: {
                                id: payload.groupId,
                            },
                        },
                    },
                });
            }
            const verifyBand = group.Band.some((ban) => {
                return ban.id === +user.id;
            });
            if (verifyBand) {
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        channelsBand: {
                            disconnect: {
                                id: payload.groupId,
                            },
                        },
                    },
                });
            }
            if (verifyAdmin) {
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        channelsAdmin: {
                            disconnect: {
                                id: payload.groupId,
                            },
                        },
                    },
                });
            }
            if (verifyOwner) {
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        channelsOwner: {
                            disconnect: {
                                id: payload.groupId,
                            },
                        },
                    },
                });
            }
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    channels: {
                        disconnect: {
                            id: payload.groupId,
                        },
                    },
                    channelsMember: {
                        disconnect: {
                            id: payload.groupId,
                        },
                    }
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `you left this group`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleJoinGroup(client, payload) {
        var _a;
        const jwt = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (jwt) {
            const info = (0, jwt_decode_1.default)(jwt);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            if (user.id !== payload.userId) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to join this group`, type: false });
                return;
            }
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Band: true,
                    Owners: true,
                    Admins: true,
                },
            });
            if (group.type === "private") {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to join this group`, type: false });
                return;
            }
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are already a member of this group`, type: false });
                return;
            }
            const verifyBand = group.Band.some((ban) => {
                return ban.id === +user.id;
            });
            if (verifyBand) {
                this.server.to(user.username).emit("errorNotif", { message: `you are banned from this group`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    channels: {
                        connect: {
                            id: payload.groupId,
                        },
                    },
                    channelsMember: {
                        connect: {
                            id: payload.groupId,
                        },
                    }
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `you are now a member of this group`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleJoinProtectedGroup(client, payload) {
        var _a;
        const jwt = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (jwt) {
            const info = (0, jwt_decode_1.default)(jwt);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            if (user.id !== payload.userId) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to join this group`, type: false });
                return;
            }
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Band: true,
                    Owners: true,
                    Admins: true,
                },
            });
            if (group.type === "private") {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to join this group`, type: false });
                return;
            }
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are already a member of this group`, type: false });
                return;
            }
            const verifyBand = group.Band.some((ban) => {
                return ban.id === +user.id;
            });
            if (verifyBand) {
                this.server.to(user.username).emit("errorNotif", { message: `you are banned from this group`, type: false });
                return;
            }
            if (group.password !== payload.password) {
                this.server.to(user.username).emit("errorNotif", { message: `wrong password`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    channels: {
                        connect: {
                            id: payload.groupId,
                        },
                    },
                    channelsMember: {
                        connect: {
                            id: payload.groupId,
                        },
                    }
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `you are now a member of this group`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleKickUser(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Owners: true,
                    Admins: true,
                    Band: true,
                    Muts: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to kick this user`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            const verifyAdmin = group.Admins.some((admin) => {
                return admin.id === +user.id;
            });
            if (!verifyOwner && !verifyAdmin) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to kick this user`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channels: {
                        disconnect: {
                            id: group.id,
                        },
                    },
                    channelsMember: {
                        disconnect: {
                            id: group.id,
                        },
                    }
                },
            });
            const verifyAdmin2 = group.Admins.some((admin) => {
                return admin.id === +payload.userId;
            });
            if (verifyAdmin2) {
                await this.prisma.user.update({
                    where: {
                        id: payload.userId,
                    },
                    data: {
                        channelsAdmin: {
                            disconnect: {
                                id: group.id,
                            },
                        },
                    },
                });
            }
            const verifyMuts = group.Muts.some((mut) => {
                return mut.id === +payload.userId;
            });
            if (verifyMuts) {
                await this.prisma.user.update({
                    where: {
                        id: payload.userId,
                    },
                    data: {
                        channelsMuts: {
                            disconnect: {
                                id: group.id,
                            },
                        },
                    },
                });
                await this.prisma.Muted.delete({
                    where: {
                        userId: payload.userId,
                        channelId: group.id,
                    },
                });
            }
            const verifyBand = group.Band.some((ban) => {
                return ban.id === +payload.userId;
            });
            if (verifyBand) {
                await this.prisma.user.update({
                    where: {
                        id: payload.userId,
                    },
                    data: {
                        channelsBand: {
                            disconnect: {
                                id: group.id,
                            },
                        },
                    },
                });
            }
            this.server.to(user.username).emit("errorNotif", { message: `this user is kicked`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleSetAdmin(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Owners: true,
                    Admins: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to set this user as admin`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            if (!verifyOwner) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to set this user as admin`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channelsAdmin: {
                        connect: {
                            id: group.id,
                        },
                    },
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `this user is now an admin`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleBanUser(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Owners: true,
                    Admins: true,
                    Muts: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to ban this user`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            const verifyAdmin = group.Admins.some((admin) => {
                return admin.id === +user.id;
            });
            if (!verifyOwner && !verifyAdmin) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to ban this user`, type: false });
                return;
            }
            const verifyAdmin2 = group.Admins.some((admin) => {
                return admin.id === +payload.userId;
            });
            if (verifyAdmin2) {
                await this.prisma.user.update({
                    where: {
                        id: payload.userId,
                    },
                    data: {
                        channelsAdmin: {
                            disconnect: {
                                id: group.id,
                            },
                        },
                    },
                });
            }
            const verifyMuts = group.Muts.some((mut) => {
                return mut.id === +payload.userId;
            });
            if (verifyMuts) {
                await this.prisma.user.update({
                    where: {
                        id: payload.userId,
                    },
                    data: {
                        channelsMuts: {
                            disconnect: {
                                id: group.id,
                            },
                        },
                    },
                });
                await this.prisma.Muted.delete({
                    where: {
                        userId: payload.userId,
                        channelId: group.id,
                    },
                });
            }
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channels: {
                        disconnect: {
                            id: group.id,
                        },
                    },
                    channelsMember: {
                        disconnect: {
                            id: group.id,
                        },
                    }
                },
            });
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channelsBand: {
                        connect: {
                            id: group.id,
                        },
                    },
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `this user is banned`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleUnBanUser(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Owners: true,
                    Admins: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to unban this user`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            const verifyAdmin = group.Admins.some((admin) => {
                return admin.id === +user.id;
            });
            if (!verifyOwner && !verifyAdmin) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to unban this user`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channelsBand: {
                        disconnect: {
                            id: group.id,
                        },
                    },
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `this user is unbanned`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleMuteUser(client, payload) {
        var _a, _b;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Owners: true,
                    Admins: true,
                    Muts: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to mute this user`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            const verifyAdmin = group.Admins.some((admin) => {
                return admin.id === +user.id;
            });
            if (!verifyOwner && !verifyAdmin) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to mute this user`, type: false });
                return;
            }
            const verifyMuts = (_b = group.Muts) === null || _b === void 0 ? void 0 : _b.some((mut) => {
                return mut.id === +payload.userId;
            });
            if (verifyMuts) {
                this.server.to(user.username).emit("errorNotif", { message: `this user is already muted`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channelsMuts: {
                        connect: {
                            id: group.id,
                        },
                    },
                },
            });
            await this.prisma.Muted.create({
                data: {
                    userId: payload.userId,
                    channelId: payload.groupId,
                    timeOffMute: payload.timeOffMute,
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `this user is muted`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleUnMuteUser(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Members: true,
                    Owners: true,
                    Admins: true,
                },
            });
            const verifyIsMemmber = group.Members.some((member) => {
                return member.id === +user.id;
            });
            if (!verifyIsMemmber) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to unmute this user`, type: false });
                return;
            }
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            const verifyAdmin = group.Admins.some((admin) => {
                return admin.id === +user.id;
            });
            if (!verifyOwner && !verifyAdmin) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to unmute this user`, type: false });
                return;
            }
            await this.prisma.user.update({
                where: {
                    id: +payload.userId,
                },
                data: {
                    channelsMuts: {
                        disconnect: {
                            id: group.id,
                        },
                    },
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `this user is unmuted`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleRemoveGroupPass(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info === null || info === void 0 ? void 0 : info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Owners: true,
                },
            });
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            if (!verifyOwner) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to remove this group password`, type: false });
                return;
            }
            await this.prisma.channels.update({
                where: {
                    id: payload.groupId,
                },
                data: {
                    password: "",
                    type: "public",
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `group password removed`, type: true });
            this.server.emit("refresh");
        }
    }
    async handleSetGroupPass(client, payload) {
        var _a;
        const token = (_a = client.handshake.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            const info = (0, jwt_decode_1.default)(token);
            const user = await this.prisma.user.findUnique({
                where: {
                    id: info.userId,
                },
            });
            const group = await this.prisma.channels.findUnique({
                where: {
                    id: payload.groupId,
                },
                include: {
                    Owners: true,
                },
            });
            const verifyOwner = group.Owners.some((owner) => {
                return owner.id === +user.id;
            });
            if (!verifyOwner) {
                this.server.to(user.username).emit("errorNotif", { message: `you are not allowed to set this group password`, type: false });
                return;
            }
            await this.prisma.channels.update({
                where: {
                    id: payload.groupId,
                },
                data: {
                    password: payload.password,
                    type: "protected",
                },
            });
            this.server.to(user.username).emit("errorNotif", { message: `group password set`, type: true });
            this.server.emit("refresh");
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", SocketIO.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("privet-message"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handlePrivetMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("block-user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleBlockUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("unblock-user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleUnblockUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("create-group"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleCreateGroup", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("refresh"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleRefresh", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("message-to-group"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessageToGroup", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("leaveGroup"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleExitGroup", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("joinGroup"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleJoinGroup", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("joinProtectedGroup"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleJoinProtectedGroup", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("KickUser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleKickUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("SetAdmin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSetAdmin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("BanUser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleBanUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("UnBanUser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleUnBanUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("MuteUser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMuteUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("UnMuteUser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleUnMuteUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("removeGroupPass"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleRemoveGroupPass", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("setGroupPass"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSetGroupPass", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: true,
            methods: ["GET", "POST"],
        },
    }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map