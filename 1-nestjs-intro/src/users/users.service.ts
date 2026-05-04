import { Inject, Injectable,forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private userRepository:Repository<User>,
    @InjectRepository(Profile)
    private profileRepository:Repository<Profile>
){}
 
    async getAllUsers(){
       return await this.userRepository.find();
    }
    async getUserById(id:number){
       return await this.userRepository.findOne({ where: { id } });
    }
    async createUser(user:CreateUserDto){
       user.profile=user.profile?user.profile:{};
       const createProfile = this.profileRepository.create(user.profile);
       const savedProfile = await this.profileRepository.save(createProfile);

       const createUser = this.userRepository.create(user);
       createUser.profile = savedProfile;
       return await this.userRepository.save(createUser);
    }
    // updateUser(id:number,user:UpdateUserDto):UpdateUserDto | null{
      
    // }
}
