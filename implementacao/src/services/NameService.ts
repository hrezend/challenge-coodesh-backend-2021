import { getCustomRepository, Repository } from "typeorm";

import { Name } from "../entities/Name";
import { NameRepository } from "../repositories/NameRepository";

class NameService{

    private nameRepository : Repository<Name>;

    constructor(){
        this.nameRepository = getCustomRepository(NameRepository);
    }

    async createName(title: string, first: string, last: string){
        const name = this.nameRepository.create({title, first, last});
        
        await this.nameRepository.save(name);

        return name;
    }

}

export { NameService }