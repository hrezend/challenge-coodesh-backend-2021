import { Entity, Column, PrimaryColumn } from 'typeorm';

import { Coordinates } from './Coordinates';
import { Street } from './Street';
import { Timezone } from './Timezone';

@Entity("location")
class Location{

    @PrimaryColumn()
    id: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postcode: string;

    street: Street;
    coordinates: Coordinates;
    timezone: Timezone;
}

export { Location }