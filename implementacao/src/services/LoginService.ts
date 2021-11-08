import { getCustomRepository, Repository } from "typeorm";

import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

class LoginService{

    private loginRepository : Repository<Login>;

    constructor(){
        this.loginRepository = getCustomRepository(LoginRepository);
    }

    async createLogin(username: string, password: string, salt: string, md5: string, sha1: string, sha256: string){
        const login = this.LoginRepository.create({username, password, salt, md5, sha1, sha256});
        
        await this.loginRepository.save(login);

        return login;
    }

}

export { LoginService }