import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './User';

@Entity("name")
class Name{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    first: string;

    @Column()
    last: string;

    @OneToOne(() => User, user => user.name)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;
    
}

export { Name }