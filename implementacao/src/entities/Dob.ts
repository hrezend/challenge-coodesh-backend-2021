import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './User';

@Entity("dob")
class Dob{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    date: Date;

    @Column()
    age: Number;
    
    @OneToOne(() => User, user => user.dob)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;

}

export { Dob }