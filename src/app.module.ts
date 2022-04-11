import { Module } from '@nestjs/common';
import { AppController } from './crud/app.controller';
import { AppService } from './crud/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
