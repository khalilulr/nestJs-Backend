import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hashtag } from './hashtag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HashtagService {
    constructor(@InjectRepository(Hashtag) private readonly hashtagRepository:Repository<Hashtag>){}

    findAll() {
        return this.hashtagRepository.find();
    }

    findHashTagById(id: number) {
        return this.hashtagRepository.findOneBy({ id });
    }

    create(name: string) {
        const hashtag = this.hashtagRepository.create({ name });
        return this.hashtagRepository.save(hashtag);
    }

}
