import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDTO } from './dto/create-tweet.dto';

@Controller('tweet')
export class TweetController {
    constructor(private readonly tweetService:TweetService){}
    
    // @Get()
    // getAllTweets(){
    //     return this.tweetService.getAllTweets();
    // }

    @Get(':id')
    async getAllTweets(@Param('id',ParseIntPipe) id:number){
        return await this.tweetService.getAllTweets(id);
    }   

    @Post()
    async createTweet(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted: true,transform:true}) ) createTweet:CreateTweetDTO){
        return await this.tweetService.createTweet(createTweet);
    }

}
