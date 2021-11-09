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

    async getUserByID(userId: Number){
        const user = await this.userRepository.findOne({
            where: {id: userId},
            relations: ["name", "picture", "location", "dob", "importedId", "registered", "login"]
        });
        
        return user;
    }

    async updateUser(userId: Number){
        const userExists = await this.userRepository.find({
            where: {id: userId},
        });

        if(!userExists){
            return false;
        }

        await this.userRepository.createQueryBuilder().update(User).set({ name: "HÉRSÃO" }).where("id = :userId", {userId}).execute();
        
        return true;
    }

    async deleteUser(userId: Number){
        const userExists = await this.userRepository.find({
            where: {id: userId},
        });

        if(!userExists){
            return false;
        }

        await this.userRepository.createQueryBuilder().delete().from(User).where("id = :userId", {userId}).execute();
        
        return true;
    }

    async createUser(gender: string, email: string, phone: string, cell: string, nat: string, idId: Number, nameId: Number, locationId: Number, loginId: Number, dobId: Number, registeredId: Number, pictureId: Number){
        const user = this.userRepository.create({gender, email, phone, cell, nat, idId, nameId, locationId, loginId, dobId, registeredId, pictureId});

        await this.userRepository.save(user);

        return user;
    }

}

export { UserService }