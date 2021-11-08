import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("timezone")
class Timezone{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    offset: string;

    @Column()
    description: string;

}

export { Timezone }