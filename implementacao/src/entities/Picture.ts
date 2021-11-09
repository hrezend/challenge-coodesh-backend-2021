import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './User';

@Entity("picture")
class Picture{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    thumbnail: string;

    @Column()
    medium: string;

    @Column()
    large: string;

    @OneToOne(() => User, user => user.picture)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;

}

export { Picture }