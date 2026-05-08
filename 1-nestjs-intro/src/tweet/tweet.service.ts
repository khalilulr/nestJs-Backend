import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { CreateTweetDTO } from './dto/create-tweet.dto';
import { HashtagService } from '../hashtag/hashtag.service';
import { UpdateTweetDTO } from './dto/update-tweet.dto';

@Injectable()
export class TweetService {
    constructor(private readonly userService:UsersService,
        private readonly hashtagService:HashtagService,
        @InjectRepository(Tweet) private readonly tweetRepository:Repository<Tweet>
    ){
    }

    public async getAllTweets(userId:number){
        return await this.tweetRepository.find({where:{user:{id:userId}},relations:{user:true}});
    }
    public async createTweet(createTweet:CreateTweetDTO){
        const user=await this.userService.getUserById(createTweet.userId);
        const hashtags: any[] = [];
        for(const hashtagId of createTweet.hashtagIds || []){
             const hashtag= await this.hashtagService.findHashTagById(hashtagId);
             hashtags.push(hashtag);
        }
        if (!user) {
            throw new Error('User not found');
        }

        const tweet= this.tweetRepository.create({content:createTweet.content,image:createTweet.image,user:user,hashtags:hashtags});
        return await this.tweetRepository.save(tweet);
    }
    public async updateTweet(updateTweet:UpdateTweetDTO){
        const hashtagEntities: any[] = [];
        for(const hashtagId of updateTweet.hashtagIds || []){
             const hashtag= await this.hashtagService.findHashTagById(hashtagId);
             hashtagEntities.push(hashtag);
        }
        const tweet= await this.tweetRepository.findOne({where:{id:updateTweet.id},relations:{hashtags:true}});
        if(!tweet){
            return 'Tweet not found';
        }
        tweet.content = updateTweet.content ?? tweet.content;
        tweet.image = updateTweet.image ?? tweet.image;
        tweet.hashtags = hashtagEntities.length > 0 ? hashtagEntities : tweet.hashtags;

        Object.assign(tweet, updateTweet);
        return await this.tweetRepository.save(tweet);
    }
  
}
