import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn} from 'typeorm';

import { Login } from './Login';
import { Name } from './Name';
import { Dob } from './Dob';
import { Registered } from './Registered';
import { ImportedId } from './ImportedId';
import { Picture } from './Picture';
import { Location } from './Location';

@Entity("user")
class User{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    cell: string;

    @Column()
    nat: string;

    @CreateDateColumn()
    imported_t: Date;

    @Column({default:"PUBLISHED"})
    status: string;

    @OneToOne(() => ImportedId, imp => imp.user)
    importedId: ImportedId;

    @OneToOne(() => Name, nam => nam.user)
    name: Name;

    @OneToOne(() => Location, loc => loc.user)
    location: Location;

    @OneToOne(() => Login, log => log.user)
    login: Login;

    @OneToOne(() => Dob, dob => dob.user)
    dob: Dob;

    @OneToOne(() => Registered, rg => rg.user)
    registered: Registered;

    @OneToOne(() => Picture, pic => pic.user)
    picture: Picture;

}

export { User }