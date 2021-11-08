import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("name")
class Name{

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    first: string;

    @Column()
    last: string;
    
}

export { Name }