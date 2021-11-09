import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("picture")
class Picture{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    thumbnail: string;

    @Column()
    medium: string;

    @Column()
    large: string;

}

export { Picture }