import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("coordinates")
class Coordinates{

    @PrimaryColumn()
    id: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

}

export { Coordinates }