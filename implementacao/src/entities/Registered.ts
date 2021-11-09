import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("registered")
class Registered{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    date: Date;

    @Column({nullable: true})
    age: Number;

}

export { Registered }