import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport/dist/passport/passport.strategy";
import { Profile, Strategy } from "passport-facebook";


@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(config: ConfigService) {
        super({
            clientID: config.get<string>('FACEBOOK_APP_ID'),
            clientSecret: config.get<string>('FACEBOOK_APP_SECRET'),
            callbackURL: config.get<string>('CALL_BACK_URL'),
            scope: "email",
            profileFields: ['emails', 'name']
        })
    }
    async validate(
        accessToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
        };
        const payload = {
            user,
            accessToken,
        };

        done(null, payload);
    }
}