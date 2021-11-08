import { getCustomRepository, Repository } from "typeorm";

import { Coordinates } from "../entities/Coordinates";
import { CoordinatesRepository } from "../repositories/CoordinatesRepository";

class CoordinatesService{

    private coordinatesRepository : Repository<Coordinates>;

    constructor(){
        this.coordinatesRepository = getCustomRepository(CoordinatesRepository);
    }

    async createCoordinates(latitude: string, longitude: string){
        const coordinates = this.coordinatesRepository.create({latitude, longitude});
        
        await this.coordinatesRepository.save(coordinates);

        return coordinates;
    }

}

export { CoordinatesService }