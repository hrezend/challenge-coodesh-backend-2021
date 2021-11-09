import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

import { User } from './User';

@Entity("registered")
class Registered{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    date: Date;

    @Column()
    age: Number;

    @OneToOne(() => User, user => user.registered)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;
}

export { Registered }