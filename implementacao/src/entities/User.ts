import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, IsNull } from 'typeorm';

import { Login } from './Login';
import { Name } from './Name';
import { Dob } from './Dob';
import { Registered } from './Registered';
import { ImportedId } from './ImportedId';
import { Picture } from './Picture';
import { Location } from './Location';

@Entity("user")
class User{

    @PrimaryGeneratedColumn()
    id: Number;

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

    @OneToOne(() => ImportedId)
    @JoinColumn({name: 'importedID_id'})
    importedId: ImportedId;

    @Column()
    importedId_id: Number;

    @OneToOne(() => Name)
    @JoinColumn({name: 'name_id'})
    name: Name;

    @Column()
    name_id: Number;

    @OneToOne(() => Location)
    @JoinColumn({name: 'location_id'})
    location: Location;

    @Column()
    location_id: Number;

    @OneToOne(() => Login)
    @JoinColumn({name: 'login_id'})
    login: Login;

    @Column()
    login_id: Number;

    @OneToOne(() => Dob)
    @JoinColumn({name: 'dob_id'})
    dob: Dob;

    @Column()
    dob_id: Number;

    @OneToOne(() => Registered)
    @JoinColumn({name: 'registered_id'})
    registered: Registered;

    @Column()
    registered_id: Number;

    @OneToOne(() => Picture)
    @JoinColumn({name: 'picture_id'})
    picture: Picture;

    @Column()
    picture_id: Number;
}

export { User }