import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CrudModule } from './crud/crud.module';
import { MessagesModule } from './chat_app_websocket/messages.module';
import { GoogleOauthModule } from './google-oauth/oauth.module';
import { facebookAuthModule } from './facebook-oauth/facebook.module';
import { MediumModule } from './medium_clone/medium_clone.module';

@Module({
  imports: [
    AuthModule,
    CrudModule,
    PrismaModule,
    GoogleOauthModule,
    MessagesModule,
    facebookAuthModule,
    MediumModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ]
})
export class AppModule { }
