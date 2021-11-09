import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity("location")
class Location{

    @PrimaryGeneratedColumn("increment")
    id: Number;

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

}

export { Location }