import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Coordinates } from './Coordinates';
import { Street } from './Street';
import { Timezone } from './Timezone';

@Entity("location")
class Location{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    city: string;

    @Column({nullable: true})
    state: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable: true})
    postcode: string;

    @OneToOne(() => Street)
    @JoinColumn({name: 'streetId'})
    street: Street;

    @Column({nullable: true})
    streetId: Number;

    @OneToOne(() => Coordinates)
    @JoinColumn({name: 'coordinatesId'})
    coordinates: Coordinates;

    @Column({nullable: true})
    coordinatesId: Number;

    @OneToOne(() => Timezone)
    @JoinColumn({name: 'timezoneId'})
    timezone: Timezone;

    @Column({nullable: true})
    timezoneId: Number;
}

export { Location }