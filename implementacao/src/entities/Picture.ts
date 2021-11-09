import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("picture")
class Picture{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    thumbnail: string;

    @Column({nullable: true})
    medium: string;

    @Column({nullable: true})
    large: string;

}

export { Picture }