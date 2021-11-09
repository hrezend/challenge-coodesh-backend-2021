import { getCustomRepository, Repository } from "typeorm";

import { Registered } from "../entities/Registered";
import { RegisteredRepository } from "../repositories/RegisteredRepository";

class RegisteredService{

    private registeredRepository : Repository<Registered>;

    constructor(){
        this.registeredRepository = getCustomRepository(RegisteredRepository);
    }

    async createRegistered(date: Date, age: Number, user_id: Number){
        const registered = this.registeredRepository.create({date, age, user_id});
        
        await this.registeredRepository.save(registered);

        return registered;
    }

}

export { RegisteredService }