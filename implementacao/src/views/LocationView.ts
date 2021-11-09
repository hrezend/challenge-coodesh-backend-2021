import { Location } from "../entities/Location";

export default{

    render(location: Location){
        return {
            city: location.city,
            state: location.state,
            country: location.country,
            postcode: location.postcode,

            timezone:{
                offset: location.offset,
                description: location.description,
            },
            coordinates:{
                latitude: location.latitude,
                longitude: location.longitude,
            },
            street:{
                number: location.number,
                name: location.street,
            }
        };
    }
    
}