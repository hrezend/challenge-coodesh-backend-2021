import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';

import { Login } from './Login';
import { Name } from './Name';
import { Dob } from './Dob';
import { Registered } from './Registered';
import { Id } from './Id';
import { Picture } from './Picture';
import { Location } from './Location';

@Entity("user")
class User{

    @PrimaryColumn()
    userId: string;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    cell: string;

    @Column()
    nat: string;

    @CreateDateColumn()
    imported_t: Date;

    @Column({default:"PUBLISHED"})
    status: string;

    @OneToOne(() => Id)
    @JoinColumn()
    id: Id;

    @OneToOne(() => Name)
    @JoinColumn()
    name: Name;

    @OneToOne(() => Location)
    @JoinColumn()
    location: Location;

    @OneToOne(() => Login)
    @JoinColumn()
    login: Login;

    @OneToOne(() => Dob)
    @JoinColumn()
    dob: Dob;

    @OneToOne(() => Registered)
    @JoinColumn()
    registered: Registered;

    @OneToOne(() => Picture)
    @JoinColumn()
    picture: Picture;
}

export { User }