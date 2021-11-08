import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("id")
class Id{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    value: string;
    
}

export { Id }