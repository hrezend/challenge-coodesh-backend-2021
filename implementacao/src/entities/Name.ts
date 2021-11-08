import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("name")
class Name{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    title: string;

    @Column()
    first: string;

    @Column()
    last: string;
    
}

export { Name }