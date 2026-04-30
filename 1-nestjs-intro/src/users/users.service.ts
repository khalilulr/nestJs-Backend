import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

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
    updateUser(id:number,user:UpdateUserDto):UpdateUserDto | null{
        const index=this.users.findIndex((user)=>user.id===id);
        if(index===-1){
            return null;
        }
        if(user.name!==undefined){
            this.users[index].name=user.name;
        }
        if(user.age!==undefined){
            this.users[index].age=user.age;
        }
        if(user.gender!==undefined){
            this.users[index].gender=user.gender
        }
        if(user.isMarried!==undefined){
            this.users[index].isMarried=user.isMarried;
        }
        const updatedUser=this.users[index];
        return updatedUser;
    }
}
