import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { User } from './User';

@Entity("name")
class Name{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    title: string;

    @Column({nullable: true})
    first: string;

    @Column({nullable: true})
    last: string;

    @OneToOne(() => User, user => user.name, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User;
    
}

export { Name }