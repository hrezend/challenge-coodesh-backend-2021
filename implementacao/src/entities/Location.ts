import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Coordinates } from './Coordinates';
import { Street } from './Street';
import { Timezone } from './Timezone';

@Entity("location")
class Location{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postcode: string;

    @OneToOne(() => Street)
    @JoinColumn()
    street: Street;

    @OneToOne(() => Coordinates)
    @JoinColumn()
    coordinates: Coordinates;

    @OneToOne(() => Timezone)
    @JoinColumn()
    timezone: Timezone;
}

export { Location }