import { Inject, Injectable,forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private userRepository:Repository<User>){}
 
    async getAllUsers():Promise<CreateUserDto[]>{
       return await this.userRepository.find();
    }
    async getUserById(id:number):Promise<CreateUserDto | null>{
       return await this.userRepository.findOne({ where: { id } });
    }
    async createUser(user:CreateUserDto):Promise<CreateUserDto>{
        const userExists = await this.userRepository.findOne({ where: { email: user.email } });
        // console.log(userExists);
        if (userExists) {
            return 'User with this email already exists' as any;
        }
        let newUser = this.userRepository.create(user);
        newUser= await this.userRepository.save(newUser);
        return newUser;
    }
    // updateUser(id:number,user:UpdateUserDto):UpdateUserDto | null{
      
    // }
}
