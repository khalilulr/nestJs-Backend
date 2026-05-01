import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UsersService)) private readonly userService:UsersService){}
    isAuthenticated:boolean=false;
    login(username:string,password:string):string{
        const user=this.userService.users.find(user=>user.name===username && user.password===password);
        if(!user){
            return "Invalid credentials";
        }
        this.isAuthenticated=true;
        return "Login successful, This is a dummy token";
    }
    
}
