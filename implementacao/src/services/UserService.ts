import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService{

    private userRepository : Repository<User>;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }
    
    async getUsers(){
        const users = await this.userRepository.find({
            relations: ["name", "picture", "location", "dob", "importedId", "registered", "login"]
        });

        return users;
    }

    async getUserByID(id: Number){
        const user = await this.userRepository.findOne({
            where: {id},
            relations: ["name", "picture", "location", "dob", "importedId", "registered", "login"]
        });
        
        return user;
    }

    async updateUser(id: Number){
        const userExists = await this.userRepository.find({
            where: {id},
        });

        if(!userExists){
            return false;
        }

        await this.userRepository.createQueryBuilder().update(User).set({ name: "HÉRSÃO" }).where("id = :id", {id}).execute();
        
        return true;
    }

    async deleteUser(id: Number){
        const userExists = await this.userRepository.find({
            where: {id},
        });

        if(!userExists){
            return false;
        }

        await this.userRepository.createQueryBuilder().delete().from(User).where("id = :id", {id}).execute();
        
        return true;
    }

    async createUser(gender: string, email: string, phone: string, cell: string, nat: string){
        const user = this.userRepository.create({gender, email, phone, cell, nat});
        
        await this.userRepository.save(user);
        
        return user;
    }

}

export { UserService }