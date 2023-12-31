import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-42";
import { UserService } from "../user/user.service";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, "42") {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {
    super({
      clientID: process.env.UID_42,
      clientSecret: process.env.SECRET_42,
      callbackURL: process.env.CALLBACK_URL_42,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
  ): Promise<any> {
    const {id , username, emails, name , _json} = profile;
    const userData = {
      oauthid: id.toString(),
      username,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      avatar: _json.image.link,
    };
    return await this.authService.logicAuth(userData);
  }
}
