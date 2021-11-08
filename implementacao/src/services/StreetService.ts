import { getCustomRepository, Repository } from "typeorm";

import { Street } from "../entities/Street";
import { StreetRepository } from "../repositories/StreetRepository";

class StreetService{

    private streetRepository : Repository<Street>;

    constructor(){
        this.streetRepository = getCustomRepository(StreetRepository);
    }

    async createStreet(number: Number, name: string){
        const street = this.streetRepository.create({number, name});
        
        await this.streetRepository.save(street);

        return street;
    }

}

export { StreetService }