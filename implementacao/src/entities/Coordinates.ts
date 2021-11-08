import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("coordinates")
class Coordinates{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

}

export { Coordinates }