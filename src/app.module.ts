import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './alert/alert.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    CommentModule,
    MongooseModule.forRoot(
      'mongodb+srv://asrarDB:EvykJHs2MBsQl87a@thecampaign.gcmfw.mongodb.net/alert?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
