import { getCustomRepository, Repository } from "typeorm";

import { Location } from "../entities/Location";
import { LocationRepository } from "../repositories/LocationRepository";

class LocationService{

    private locationRepository : Repository<Location>;

    constructor(){
        this.locationRepository = getCustomRepository(LocationRepository);
    }

    async createLocation(city: string, state: string, country: string, postcode: Number, latitude: string, longitude: string, offset: string, description: string, number: Number, street: string){
        const location = this.locationRepository.create({city, state, country, postcode, latitude, longitude, offset, description, number, street});
        
        await this.locationRepository.save(location);

        return location;
    }

}

export { LocationService }