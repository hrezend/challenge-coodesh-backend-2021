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

    async getUserByID(userId: Number){
        const user = await this.userRepository.createQueryBuilder().select(User).where("userId = :userId", {userId}).getOne();

        return user;
    }

    async updateUser(userId: Number){
        const user = await this.userRepository.createQueryBuilder().update(User).set({ name: "HÉRSÃO" }).where("userId = :userId", {userId}).execute();
        
        return user;
    }

    async deleteUser(userId: Number){
        const user = await this.userRepository.createQueryBuilder().delete().from(User).where("userId = :userId", {userId}).execute();

        return user;
    }

    async createUser(gender: string, email: string, phone: string, cell: string, nat: string, idId: Number, nameId: Number, locationId: Number, loginId: Number, dobId: Number, registeredId: Number, pictureId: Number){
        const user = this.userRepository.create({gender, email, phone, cell, nat, idId, nameId, locationId, loginId, dobId, registeredId, pictureId});

        await this.userRepository.save(user);

        return user;
    }

}

export { UserService }