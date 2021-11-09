import { Coordinates } from "../entities/Coordinates";

export default{

    render(coordinates: Coordinates){
        return {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
        };
    }
    
}