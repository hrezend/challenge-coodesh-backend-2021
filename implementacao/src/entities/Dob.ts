import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { User } from './User';

@Entity("dob")
class Dob{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    date: Date;

    @Column({nullable: true})
    age: Number;

    @OneToOne(() => User, user => user.dob, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User;
}

export { Dob }