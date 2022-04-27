import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthServices } from './oauth.service';
import { GoogleStrategy } from './oauth.strategy';
@Module({
  controllers: [OauthController],
  providers: [OauthServices, GoogleStrategy]
})
export class OauthModule { }
