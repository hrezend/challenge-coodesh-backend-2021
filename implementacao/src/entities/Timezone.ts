import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("timezone")
class Timezone{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    offset: string;

    @Column({nullable: true})
    description: string;

}

export { Timezone }