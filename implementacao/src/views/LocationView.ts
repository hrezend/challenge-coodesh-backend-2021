import { Location } from "../entities/Location";

import CoordinatesView from "./CoordinatesView";
import StreetView from "./StreetView";
import TimezoneView from "./TimezoneView";

export default{

    render(location: Location){
        return {
            city: location.city,
            state: location.state,
            country: location.country,
            postcode: location.postcode,

            coordinates: CoordinatesView.render(location.coordinates),
            street: StreetView.render(location.street),
            timezone: TimezoneView.render(location.timezone),
        };
    }
    
}