import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("picture")
class Picture{

    @PrimaryColumn()
    id: string;

    @Column()
    thumbnail: string;

    @Column()
    medium: string;

    @Column()
    large: string;

}

export { Picture }