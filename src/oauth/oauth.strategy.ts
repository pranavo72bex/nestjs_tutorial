import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google-oauth') {
    constructor(config: ConfigService) {
        super({
            clientID: config.get('DATABASE_URL'),
            clinetSecret: config.get('GOOGLE_SECRETE'),
            callbackURL: config.get('callbackURL'),
            scope: ['email', 'profile']
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
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
