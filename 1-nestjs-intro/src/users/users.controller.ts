import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { ParamDto } from './dto/param.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
    @Get(':isMarried')
    getAllUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit: number, @Param(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) param?: ParamDto ):string{
        const userService= new UsersService();
        const users= JSON.stringify(userService.getAllUsers());
        if(param!=undefined && param.isMarried!==undefined){
            const filteredUsers= JSON.stringify(userService.getAllUsers().filter((user)=>user.isMarried===param.isMarried));
            return filteredUsers;
        }
        return users;

    }
    @Get('/:id')
    getUserById(@Param('id',ParseIntPipe) id: number ):string{
        const userService= new UsersService();
        const user=userService.getAllUsers().find((user)=>user.id===id);
        return JSON.stringify(user);
    }

    @Post()
    createUser(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) user: CreateUserDto ):string{
        console.log(typeof user);
        console.log(user instanceof CreateUserDto);
        const userService= new UsersService();
        const newUser= userService.createUser(user);
        return JSON.stringify(newUser);
    }

    @Patch('/:id')
    updateUser(@Param('id',ParseIntPipe) id:number,
               @Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) user: UpdateUserDto ):string{
        const userService= new UsersService();
        const updatedUser= userService.updateUser(id, user);
        return JSON.stringify(updatedUser);
    }

}
