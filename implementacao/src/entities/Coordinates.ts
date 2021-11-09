import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("coordinates")
class Coordinates{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    latitude: string;

    @Column({nullable: true})
    longitude: string;

}

export { Coordinates }