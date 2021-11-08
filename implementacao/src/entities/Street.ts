import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("street")
class Street{

    @PrimaryColumn()
    id: string;

    @Column()
    number: Number;

    @Column()
    name: string;

}

export { Street }