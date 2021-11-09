import { getCustomRepository, Repository } from "typeorm";

import { Dob } from "../entities/Dob";
import { DobRepository } from "../repositories/DobRepository";

class DobService{

    private dobRepository : Repository<Dob>;

    constructor(){
        this.dobRepository = getCustomRepository(DobRepository);
    }

    async createDob(date: Date, age: Number, user_id: Number){
        const dob = this.dobRepository.create({date, age, user_id});
        
        await this.dobRepository.save(dob);

        return dob;
    }

}

export { DobService }