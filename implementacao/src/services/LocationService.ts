import { getCustomRepository, Repository } from "typeorm";

import { Location } from "../entities/Location";
import { LocationRepository } from "../repositories/LocationRepository";

class LocationService{

    private locationRepository : Repository<Location>;

    constructor(){
        this.locationRepository = getCustomRepository(LocationRepository);
    }

    async createLocation(city: string, state: string, country: string, postcode: string, streetId: Number, coordinatesId: Number, timezoneId: Number){
        const location = this.locationRepository.create({city, state, country, postcode, streetId, coordinatesId, timezoneId});
        
        await this.locationRepository.save(location);

        return location;
    }

    async getLocationByID(id: Number){
        const location = await this.locationRepository.find({
            where: {id},
            relations: ["timezone", "coordinates", "street"]
        });
        
        return location;
    }

}

export { LocationService }