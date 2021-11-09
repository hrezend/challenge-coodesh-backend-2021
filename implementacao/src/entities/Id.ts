import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("id")
class Id{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    value: string;
    
}

export { Id }