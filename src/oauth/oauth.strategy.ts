import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: "909583270134-i50lnk7ii2hq1q0pmgiuajjba4qjm1ok.apps.googleusercontent.com",
            clinetSecret: "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",
            callbackURL: 'http://localhost:3000/google/redirect',
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
