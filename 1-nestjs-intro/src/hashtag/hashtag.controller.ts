import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateHashtagDTO } from './dto/createHashtag.dto';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {
    constructor(private readonly hashtagService: HashtagService){}
    @Post()
    createHashtag(@Body() createHashtagDTO:CreateHashtagDTO){
        this.hashtagService.create(createHashtagDTO.name);
        return "Hashtag created successfully";
    }

    @Get()
    getAllHashtags(){
        return this.hashtagService.findAll();
    }

}
