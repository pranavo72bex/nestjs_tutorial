import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(config: ConfigService) {
        super({
            clientID: config.get('CLIENT_ID'),
            clinetSecret: config.get('CLIENT_SECRET'),
            callbackURL: config.get('CALL_BACK_URL'),
            scope: ['email', 'profile']
        });
    }

    async validate(
        accessToken: string,
        profile: any,
        done: VerifyCallback
    ): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.firstName,
            lastName: name.lastName,
            picture: photos[0].value,
            accessToken
        };
        done(null, user);
    }

}
