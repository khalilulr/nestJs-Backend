import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { ParamDto } from './dto/param.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){
    }

    @Get()
    getAllUsers():string{
        try {
            const users= this.userService.getAllUsers();
            return JSON.stringify(users);
        } catch (error) {
            return JSON.stringify({error:error.message});
        }
    }

    @Get('married/:isMarried')
    getMarriedUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit: number, @Param(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) param?: ParamDto ):string{
        const users= JSON.stringify(this.userService.getAllUsers());
        if(param!=undefined && param.isMarried!==undefined){
            const filteredUsers= JSON.stringify(this.userService.getAllUsers().filter((user)=>user.isMarried===param.isMarried));
            return filteredUsers;
        }
        return users;

    }

    @Get('/:id')
    getUserById(@Param('id',ParseIntPipe) id: number ):string{
          try {
            const users= this.userService.getUserById(id);
            return JSON.stringify(users);
        } catch (error) {
            return JSON.stringify({error:error.message});
        }
    }

    @Post()
    createUser(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) user: CreateUserDto ):string{
        console.log(typeof user);
        console.log(user instanceof CreateUserDto);
        const newUser= this.userService.createUser(user);
        return JSON.stringify(newUser);
    }

    @Patch('/:id')
    updateUser(@Param('id',ParseIntPipe) id:number,
               @Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) user: UpdateUserDto ):string{
        const updatedUser= this.userService.updateUser(id, user);
        return JSON.stringify(updatedUser);
    }

}
