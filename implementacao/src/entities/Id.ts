import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("id")
class Id{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    name: string;

    @Column()
    value: string;
    
}

export { Id }