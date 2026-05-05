import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:"varchar",
        nullable:true,
        length:200
    })
    firstName:string;

    @Column({
        nullable:true,
        length:200,
        type:"varchar"
    })
    lastName:string;


    @Column({
        nullable:true,
        type:"varchar",
        length:10
    })
    gender:string;


    @Column({
        nullable:true,
        type:"varchar",
        length:500
    })
    bio:string;

    @Column({
        nullable:true,
        type:"varchar",
    })
    profilePicture:string;

    @Column({
        nullable:true,
        type:"date"
    })
    dateOfBirth:Date;

    @OneToOne(()=>User, user=>user.profile,{
        onDelete:"CASCADE"
    })
    @JoinColumn()
    user:User;
}