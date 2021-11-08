import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("timezone")
class Timezone{

    @PrimaryColumn()
    id: string;

    @Column()
    offset: string;

    @Column()
    description: string;

}

export { Timezone }