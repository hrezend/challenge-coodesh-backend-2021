import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './User';

@Entity("location")
class Location{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    number: Number;

    @Column({nullable: true})
    street: string;

    @Column({nullable: true})
    city: string;

    @Column({nullable: true})
    state: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable: true})
    postcode: string;

    @Column({nullable: true})
    latitude: string;

    @Column({nullable: true})
    longitude: string;

    @Column({nullable: true})
    offset: string;

    @Column({nullable: true})
    description: string;
    
    @OneToOne(() => User, user => user.location, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    user: User;
}

export { Location }