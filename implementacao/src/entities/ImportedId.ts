import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

import { User } from './User';

@Entity("importedId")
class ImportedId{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    value: string;

    @OneToOne(() => User, user => user.importedId)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    user_id: Number;

}

export { ImportedId }