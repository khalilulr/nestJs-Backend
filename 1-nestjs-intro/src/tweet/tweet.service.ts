import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService:UsersService){}
     tweets:{id:number,text:string,date:Date,userId:number}[]=[
        {id:1,text:"Hello World",date:new Date(9/11/2023),userId:1},
        {id:2,text:"NestJS is great",date:new Date(9/12/2023),userId:2},
        {id:3,text:"I love programming",date:new Date(9/13/2023),userId:3},
        {id:4,text:"I love NestJS",date:new Date(9/14/2023),userId:4},
    ]

    getAllTweets():{id:number,text:string,date:Date,userId:number}[]{
        const tweets=this.tweets.sort((a,b)=>b.date.getTime()-a.date.getTime());
        const response=[]=tweets.map((tweet)=>{
            const user=this.userService.getUserById(tweet.userId);
            if(user){
                return {...tweet,username:user.name};
            }
            return {...tweet,username:"Unknown User"};
        })
        return response;
    }
}
