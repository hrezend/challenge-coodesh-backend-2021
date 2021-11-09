import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("importedId")
class ImportedId{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column()
    name: string;

    @Column()
    value: string;

}

export { ImportedId }