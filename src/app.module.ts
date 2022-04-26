import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CrudModule } from './crud/crud.module';
import { MessagesModule } from './messages/messages.module';
import { OauthModule } from './oauth/oauth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    CrudModule,
    BookmarkModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MessagesModule,
    OauthModule,
  ]
})
export class AppModule { }
