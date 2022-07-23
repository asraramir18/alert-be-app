import { Module } from '@nestjs/common';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AlertSchema } from './alert.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'alert_list', schema: AlertSchema }]),
  ],
  controllers: [AlertController],
  providers: [AlertService],
})
export class CommentModule {}
