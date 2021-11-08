import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("street")
class Street{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    number: Number;

    @Column()
    name: string;

}

export { Street }