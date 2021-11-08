import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("login")
class Login{

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    md5: string;

    @Column()
    sha1: string;

    @Column()
    sha256: string;

}

export { Login }