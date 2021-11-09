import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("dob")
class Dob{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    date: Date;

    @Column({nullable: true})
    age: Number;

}

export { Dob }