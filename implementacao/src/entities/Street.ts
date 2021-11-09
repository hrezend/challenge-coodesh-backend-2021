import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("street")
class Street{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    number: Number;

    @Column({nullable: true})
    name: string;

}

export { Street }