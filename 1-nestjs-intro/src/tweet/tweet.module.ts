import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { UserModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { HashtagModule } from 'src/hashtag/hashtag.module';

@Module({
  providers: [TweetService],
  controllers: [TweetController],
  imports:[UserModule,HashtagModule,TypeOrmModule.forFeature([Tweet])]
})
export class TweetModule {}
