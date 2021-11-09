import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './User';

@Entity("login")
class Login{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    uuid: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    md5: string;

    @Column()
    sha1: string;

    @Column()
    sha256: string;

    @OneToOne(() => User, user => user.login)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;

}

export { Login }