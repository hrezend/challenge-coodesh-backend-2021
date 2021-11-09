import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, IsNull } from 'typeorm';

import { Login } from './Login';
import { Name } from './Name';
import { Dob } from './Dob';
import { Registered } from './Registered';
import { Id } from './Id';
import { Picture } from './Picture';
import { Location } from './Location';

@Entity("user")
class User{

    @PrimaryGeneratedColumn()
    userId: Number;

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

    @OneToOne(() => Id, id => id.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'idId'})
    id: Id;

    @Column({nullable: true})
    idId: Number;

    @OneToOne(() => Name, name => name.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'nameId'})
    name: Name;

    @Column({nullable: true})
    nameId: Number;

    @OneToOne(() => Location, location => location.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'locationId'})
    location: Location;

    @Column({nullable: true})
    locationId: Number;

    @OneToOne(() => Login, login => login.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'loginId'})
    login: Login;

    @Column({nullable: true})
    loginId: Number;

    @OneToOne(() => Dob, dob => dob.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'dobId'})
    dob: Dob;

    @Column({nullable: true})
    dobId: Number;

    @OneToOne(() => Registered, registered => registered.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'registeredId'})
    registered: Registered;

    @Column({nullable: true})
    registeredId: Number;

    @OneToOne(() => Picture, picture => picture.user, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'pictureId'})
    picture: Picture;

    @Column({nullable: true})
    pictureId: Number;
}

export { User }