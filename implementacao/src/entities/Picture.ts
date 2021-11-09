import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { User } from './User';

@Entity("picture")
class Picture{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    thumbnail: string;

    @Column({nullable: true})
    medium: string;

    @Column({nullable: true})
    large: string;

    @OneToOne(() => User, user => user.picture, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User;
}

export { Picture }