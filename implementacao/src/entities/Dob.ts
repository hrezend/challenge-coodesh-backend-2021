import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("dob")
class Dob{

    @PrimaryColumn()
    id: string;

    @Column()
    date: Date;

    @Column()
    age: Number;

}

export { Dob }