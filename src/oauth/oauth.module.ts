import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthServices } from './oauth.service';
@Module({
  controllers: [OauthController],
  providers: [OauthServices]
})
export class OauthModule {}
