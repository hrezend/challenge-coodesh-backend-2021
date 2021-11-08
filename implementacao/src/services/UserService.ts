import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService{

    private userRepository : Repository<User>;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }
    
    async getUsers(){
        const users = await this.userRepository.createQueryBuilder().getMany();
        
        return users;
    }

    async getUserByID(id: string){
        const user = await this.userRepository.createQueryBuilder().select(User).where("id = :id", {id}).getOne();

        return user;
    }

    async updateUser(id: string){
        const user = await this.userRepository.createQueryBuilder().update(User).set({ name: "HÉRSÃO" }).where("id = :id", {id}).execute();
        
        return user;
    }

    async deleteUser(id: string){
        const user = await this.userRepository.createQueryBuilder().delete().from(User).where("id = :id", {id}).execute();

        return user;
    }

}

export { UserService }