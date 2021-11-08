import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("dob")
class Dob{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    date: Date;

    @Column()
    age: Number;

}

export { Dob }