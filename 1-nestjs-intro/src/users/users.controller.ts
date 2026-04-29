import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit: number ):string{
        const userService= new UsersService();
        return JSON.stringify(userService.getAllUsers());
    }
    @Get('/:id')
    getUserById(@Param('id',ParseIntPipe) id: number ):string{
        const userService= new UsersService();
        const user=userService.getAllUsers().find((user)=>user.id===id);
        return JSON.stringify(user);
    }

    @Post()
    createUser(@Body(new ValidationPipe({transform:true})) user: CreateUserDto ):string{
        const userService= new UsersService();
        const newUser= userService.createUser(user);
        return JSON.stringify(newUser);
    }
    
}
