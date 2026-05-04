import { Profile } from "src/profile/profile.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm/browser";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:false,
        length:100,
        type:"varchar"
    })
    username:string;


    @Column({
        nullable:false,
        unique:true
    })
    email:string;

    @Column({
        nullable:false
    })
    password:string;

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile;

    
    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
}