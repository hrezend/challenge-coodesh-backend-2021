import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("login")
class Login{

    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({nullable: true})
    uuid: string;

    @Column({nullable: true})
    username: string;

    @Column({nullable: true})
    password: string;

    @Column({nullable: true})
    salt: string;

    @Column({nullable: true})
    md5: string;

    @Column({nullable: true})
    sha1: string;

    @Column({nullable: true})
    sha256: string;

}

export { Login }