import { getCustomRepository, Repository } from "typeorm";

import { ImportedId } from "../entities/ImportedId";
import { ImportedIdRepository } from "../repositories/ImportedIdRepository";

class ImportedIdService{

    private importedIdRepository : Repository<ImportedId>;

    constructor(){
        this.importedIdRepository = getCustomRepository(ImportedIdRepository);
    }

    async createId(name: string, value: string, user_id: Number){
        const importedId = this.importedIdRepository.create({name, value, user_id});
        
        await this.importedIdRepository.save(importedId);

        return importedId;
    }

}

export { ImportedIdService }