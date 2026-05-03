import { Inject, Injectable, forwardRef } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(){}
    isAuthenticated:boolean=false;
    login(email:string,password:string){
        // const user=this.userService.users.find(user=>user.email===email && user.password===password);
        // if(!user){
        //     return "Invalid credentials";
        // }
        // this.isAuthenticated=true;
        // return "Login successful, This is a dummy token";
    }
    
}
