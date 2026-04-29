import { Injectable } from '@nestjs/common';

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
    createUser(user:{name:string,age:number,gender:string,isMarried:boolean}):{id:number,name:string,age:number,gender:string,isMarried:boolean}{
        const id=this.users.length+1    ;
        const newUser={id,...user};
        this.users.push(newUser);
        return newUser;
    }
}
