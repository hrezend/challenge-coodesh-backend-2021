import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("name")
class Name{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    title: string;

    @Column({nullable: true})
    first: string;

    @Column({nullable: true})
    last: string;
    
}

export { Name }