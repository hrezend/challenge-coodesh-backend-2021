import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { User } from './User';

@Entity("id")
class Id{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    value: string;

    @OneToOne(() => User, user => user.id, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User;
    
}

export { Id }