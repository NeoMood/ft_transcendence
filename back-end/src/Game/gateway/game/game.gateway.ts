import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import * as SocketIO from "socket.io";
import * as jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import { PrismaService } from "../../../prisma/prisma.service";
import { Server } from "socket.io";
import { subscribe } from "diagnostics_channel";
import { MatchType } from "@prisma/client";
import { use } from "passport";
import { Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GameService } from "src/Game/game.service";
import { v4 as uuidv4 } from 'uuid';


@WebSocketGateway({
  cors: {
    origin: true,
    methods: ["GET", "POST"],

  },
  namespace: "Game",
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private gameService: GameService
  ) {}

  @WebSocketServer()
  server: SocketIO.Server;

  private waitingPlayers: { username: string; userId : string ;client: Socket }[] = [];
  private invite_waitingPlayers: { username: string; userId : string ;client: Socket }[] = [];
  private socketMap: Map<string, Socket[]> = new Map<string, Socket[]>();

  
  private matches: Map<
  string,
  { 
    matchId: string; 
    players: { username: string; userId : string ;client: Socket; score?: number }[];
  }
  > = new Map();

  private playerInMatch(playerId: string): boolean {
    for (const match of this.matches.values()) {
      if (match.players.some(player => player.client.id === playerId)) {
        return true;
      }
    }
    return false;
  }

  
  
  handleConnection(client: Socket) {
    const token = client.handshake.headers.authorization?.split(" ")[1];
    try {

      if (token) {
        const user: any = jwt_decode(token);
        if (user && user.userId) {
          this.gameService.setInGame(user.userId);
          if (!this.socketMap.has(user.userId)) {
            this.socketMap.set(user.userId, []);
          }
          this.socketMap.get(user.userId).push(client);
        }
        const matchtype_ = client.handshake.auth.matchType;
        if(matchtype_ === 'Random')
        {
          this.randomMatchmaking(client);
        }
        else if(matchtype_ === 'Invite')
        {
          this.match_invite(client);
        }
      }
    } catch (e) {
    }
  }

  //RANDOM GAME

  @SubscribeMessage("matchmaking")
  async randomMatchmaking(client: Socket) {
    try {
    const token = client.handshake.headers.authorization?.split(" ")[1];
    if (token) {
      const decoded: any = jwt_decode(token);
      if (!decoded || !decoded.userId || !decoded.username) {
        throw new Error('Invalid token');
      }
      const userId = decoded.userId;
      const username = decoded.username;
      const newObject = {
        userId : userId,
        username: username,
        client: client,
      };
      this.waitingPlayers.push(newObject);
      if (this.waitingPlayers.length >= 2) {
        const creator = this.waitingPlayers.shift();
        const opponent = this.waitingPlayers.shift();

        if (creator.userId !== opponent.userId) {
          const matchId = await this.gameService.createMatch(creator.userId, opponent.userId, MatchType.RANDOM);
          await this.gameService.updateMatch(matchId, creator.client.id, opponent.client.id);
          creator.client.join(matchId);
          opponent.client.join(matchId);
          this.server.to(matchId).emit('match started', { matchId, creator: creator.userId, opponent: opponent.userId });
        } else {
          this.waitingPlayers.unshift(opponent);
        }
      }
    }
    else {
      throw new Error('No token provided');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
  }


  @SubscribeMessage("paddle-pos")
  async handlePaddlePos(
    client: Socket,
    payload: { x: number, y: number, z: number; playerId?: string }
  ) {
    const match = await this.gameService.getMatch(client.id);
    if (match) {
      this.server.to(match.id).emit('paddle-pos', payload);
    }
  }

  @SubscribeMessage("ball-serve")
  async handleBallServe(
    client: Socket,
    payload: { hasServed: boolean }
  ) {
    const match = await this.gameService.getMatch(client.id);
    if (match) {
      await this.gameService.updateServingPlayer(match.id, client.id);
      client.broadcast.to(match.id).emit("ball-serve", payload);
    }
  }

  @SubscribeMessage("ball-position")
  async handleBallPosition(
    client: Socket,
    payload: { x: number, y: number, z: number }
  ) {
    try {
      const token = client.handshake.headers.authorization?.split(" ")[1];
      if (token) {
        const decoded: any = jwt_decode(token);
        if (!decoded || !decoded.userId || !decoded.username) {
          throw new Error('Invalid token');
        }
        const match = await this.gameService.getMatch(client.id);
        if (match && match.servingplayer === client.id) {
          client.broadcast.to(match.id).emit('ball-position', payload);
        }
      }
    } catch (e) {
    }
  }

  @SubscribeMessage("current-score")
  async handleplayerscore(
    client: Socket,
    payload: { score: number }
  ) {
    try {
      const token = client.handshake.headers.authorization?.split(" ")[1];
      if (token) {
        const decoded: any = jwt_decode(token);
        if (!decoded || !decoded.userId || !decoded.username) {
          throw new Error('Invalid token');
        }
        const match = await this.gameService.getMatch(client.id);
        if (match && match.servingplayer === client.id) {
          client.broadcast.to(match.id).emit('current-score', payload);
        }
      }
    } catch (e) {
    }
  }

  @SubscribeMessage("player-wins")
  async handleScoreUpdate(
    client: Socket,
    payload: { winner: string, winnerscore: number, loserscore: number }
    ) {
        try {
        let winnerScore : number, loserScore: number, winner: string;
        const match = await this.gameService.getMatch(client.id);
        //Should leave the match bitch
        this.server.to(match.id).emit('player-wins', { winner, winnerScore, loserScore });
        
        let creatorScore : any = null;
        let opponentScore : any = null;
        if (match) {
          if (match.creatorId === payload.winner) {
            winner = match.creatorId;
            creatorScore = payload.winnerscore;
            opponentScore = payload.loserscore; 
          } else {
            winner = match.opponentId;
            opponentScore = payload.winnerscore;
            creatorScore = payload.loserscore;
          }
          winnerScore = payload.winnerscore;
          loserScore = payload.loserscore;
          
          await this.gameService.submitScore(match.id, creatorScore, opponentScore);
          
          this.socketMap.get(match.creatorId).forEach(socket => {
            socket.leave(match.id);
          });
          this.socketMap.get(match.opponentId).forEach(socket => {
            socket.leave(match.id);
          });
        }
        } catch (e){}
    }

  //INVITE GAME


@SubscribeMessage("createMatch")
async match_invite(client: Socket) : Promise<void>  {
  try {
    const token = client.handshake.headers.authorization?.split(" ")[1];
    if (token) {
      const decoded: any = jwt_decode(token);
      if (!decoded || !decoded.userId || !decoded.username) {
        throw new Error('Invalid token');
      }
      const match = await this.gameService.getMatch2(decoded.userId);
      if (match && match.creatorId === decoded.userId)
      {
        await this.gameService.setCreatorSocket(match.id, client.id);
        client.join(match.id);
      }
      else if (match && match.opponentId === decoded.userId)
      {
        await this.gameService.setOpponentSocket(match.id, client.id);
        client.join(match.id);
      }
    }
  } catch (e) {
  }
} 

  async handleDisconnect(client: Socket) {
    try {
      const token = client.handshake.headers.authorization?.split(" ")[1];
      const match = await this.gameService.getMatch(client.id);
      if(token)
      {
        const user: any = jwt_decode(token);
        this.gameService.setOnline(user.userId);
        //Remove inactive players from waiting list
        if (this.waitingPlayers.some(player => player.userId === user.userId)) {
          this.waitingPlayers = this.waitingPlayers.filter(player => player.userId !== user.userId);}
        if (match) {
          this.server.to(match.id).emit('player-disconnected', { playerId: user.userId });
          if (user && user.userId && this.socketMap.has(user.userId)) {
            const sockets = this.socketMap.get(user.userId);
            const index = sockets.indexOf(client);
            if (index !== -1) {
              sockets.splice(index, 1);
            }
            if (sockets.length === 0) {
              this.socketMap.delete(user.userId);
            }
          }
          if(match.creatorScore !== 5 && match.opponentScore !== 5)
            await this.gameService.deleteMatch(match.id);
        }
      }
      } catch (e) {
      }
  }
}
