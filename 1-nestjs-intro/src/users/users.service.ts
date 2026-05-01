import { Inject, Injectable,forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService:AuthService){}
    users:{id:number,name:string,age:number,gender:string,isMarried:boolean,password:string}[]=[
        {id:1,name:"John",age:25,gender:"male",isMarried:false,password:"password"},
        {id:2,name:"Jane",age:30,gender:"female",isMarried:true,password:"password"},
        {id:3,name:"Doe",age:28,gender:"male ",isMarried:false,password:"password"},
    ]
    getAllUsers():{id:number,name:string,age:number,gender:string,isMarried:boolean,password:string}[]{
        if(!this.authService.isAuthenticated){
            throw new Error("Unauthorized");
        }
        return this.users;
    }
    getUserById(id:number):{id:number,name:string,age:number,gender:string,isMarried:boolean,password:string} | undefined{
        if(!this.authService.isAuthenticated){
            throw new Error("Unauthorized");
        }

        return this.users.find((user)=>user.id===id);
    }
    createUser(user:CreateUserDto):CreateUserDto{
        const id=this.users.length+1    ;
        const newUser={id,...user,password:"password"};
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
