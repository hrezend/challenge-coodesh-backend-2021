import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './User';

@Entity("location")
class Location{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    number: Number;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postcode: Number;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    offset: string;

    @Column()
    description: string;

    @OneToOne(() => User, user => user.location)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;

}

export { Location }