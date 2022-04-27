import { Module } from '@nestjs/common';
import { GoogleOauthController } from './oauth.controller';
import { GoogleOauthServices } from './oauth.service';
import { GoogleStrategy } from './oauth.strategy';
@Module({
  controllers: [GoogleOauthController],
  providers: [GoogleOauthServices, GoogleStrategy]
})
export class GoogleOauthModule { }
