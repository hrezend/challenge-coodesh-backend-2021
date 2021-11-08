import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("registered")
class Registered{

    @PrimaryColumn()
    id: string;

    @Column()
    date: Date;

    @Column()
    age: Number;

}

export { Registered }