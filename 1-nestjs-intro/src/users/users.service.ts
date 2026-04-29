import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
    users:{id:number,name:string,age:number,gender:string,isMarried:boolean}[]=[
        {id:1,name:"John",age:25,gender:"male",isMarried:false},
        {id:2,name:"Jane",age:30,gender:"female",isMarried:true},
        {id:3,name:"Doe",age:28,gender:"male ",isMarried:false},
    ]
    getAllUsers():{id:number,name:string,age:number,gender:string,isMarried:boolean}[]{
        return this.users;
    }
    createUser(user:CreateUserDto):CreateUserDto{
        const id=this.users.length+1    ;
        const newUser={id,...user};
        this.users.push(newUser);
        return newUser;
    }
}
