import { getCustomRepository, Repository } from "typeorm";

import { Id } from "../entities/Id";
import { IdRepository } from "../repositories/IdRepository";

class IdService{

    private idRepository : Repository<Id>;

    constructor(){
        this.idRepository = getCustomRepository(IdRepository);
    }

    async createId(name: string, value: string){
        const id = this.idRepository.create({name, value});
        
        await this.idRepository.save(id);

        return id;
    }

}

export { IdService }