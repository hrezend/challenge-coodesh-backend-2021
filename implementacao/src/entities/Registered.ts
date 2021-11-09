import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { User } from './User';

@Entity("registered")
class Registered{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    date: Date;

    @Column({nullable: true})
    age: Number;

    @OneToOne(() => User, user => user.registered, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User;
}

export { Registered }