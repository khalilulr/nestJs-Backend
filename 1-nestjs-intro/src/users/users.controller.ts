import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){
    }
    @Get()
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Get('/:id')
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.getUserById(id);
    }

    @Post()
    async createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
    user: CreateUserDto
    ) {
        return await this.userService.createUser(user);
    }

    // @Patch('/:id')
    // updateUser(@Param('id',ParseIntPipe) id:number,
    //            @Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})) user: UpdateUserDto ):string{
    //     const updatedUser= this.userService.updateUser(id, user);
    //     return JSON.stringify(updatedUser);
    // }
    @Delete('/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.deleteUser(id);
    }
}
