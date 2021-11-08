import { getCustomRepository, Repository } from "typeorm";

import { Timezone } from "../entities/Timezone";
import { TimezoneRepository } from "../repositories/TimezoneRepository";

class TimezoneService{

    private timezoneRepository : Repository<Timezone>;

    constructor(){
        this.timezoneRepository = getCustomRepository(TimezoneRepository);
    }

    async createTimezone(offset: string, description: string){
        const timezone = this.timezoneRepository.create({offset, description});
        
        await this.timezoneRepository.save(timezone);

        return timezone;
    }

}

export { TimezoneService }