import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("registered")
class Registered{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    date: Date;

    @Column()
    age: Number;

}

export { Registered }