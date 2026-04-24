import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers():string{
        return "API to get all users";
    }

    @Post()
    createUser():string{
        return "API to create new user"
    }
    
}
