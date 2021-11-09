import { Request, Response } from 'express';
import axios from 'axios';

import { UserService } from '../services/UserService';
import { NameService } from '../services/NameService';
import { StreetService } from '../services/StreetService';
import { CoordinatesService } from '../services/CoordinatesService';
import { TimezoneService } from '../services/TimezoneService';
import { LocationService } from '../services/LocationService';
import { LoginService } from '../services/LoginService';
import { DobService } from '../services/DobService';
import { IdService } from '../services/IdService';
import { RegisteredService } from '../services/RegisteredService';
import { PictureService } from '../services/PictureService';

class CRON{

    async download(request: Request, response: Response) : Promise<Response>{
        
        try{
            const req = await axios.get('https://randomuser.me/api/');

            const nameService = new NameService();
            const streetService = new StreetService();
            const coordinatesService = new CoordinatesService();
            const timezoneService = new TimezoneService();
            const locationService = new LocationService();
            const loginService = new LoginService();
            const dobService = new DobService();
            const idService = new IdService();
            const registeredService = new RegisteredService();
            const pictureService = new PictureService();
            const userService = new UserService();

            for(var i = 0; i < req.data.results.length; i++){
                const { title, first, last } = req.data.results[i].name;
                const { number, name: nameST } = req.data.results[i].location.street;
                const { latitude, longitude } = req.data.results[i].location.coordinates;
                const { offset, description } = req.data.results[i].location.timezone;
                const { city, state, country, postcode } = req.data.results[i].location;
                const { uuid, username, password, salt, md5, sha1, sha256 } = req.data.results[i].login;
                const { date: dateDOB, age: ageDOB } = req.data.results[i].dob;
                const { name: nameID, value: valueID } = req.data.results[i].id;
                const { date: dateRG, age: ageRG } = req.data.results[i].registered;
                const { large, medium, thumbnail } = req.data.results[i].picture;
                const { gender, email, phone, cell, nat } = req.data.results[i];

                const name = await nameService.createName(title, first, last);
                const street = await streetService.createStreet(number, nameST);
                const coordinates = await coordinatesService.createCoordinates(latitude, longitude);
                const timezone = await timezoneService.createTimezone(offset, description);
                const location = await locationService.createLocation(city, state, country, postcode, street.id, coordinates.id, timezone.id);
                const login = await loginService.createLogin(uuid, username, password, salt, md5, sha1, sha256);
                const dob = await dobService.createDob(dateDOB, ageDOB);
                const id = await idService.createId(nameID, valueID);
                const registered = await registeredService.createRegistered(dateRG, ageRG);
                const picture = await pictureService.createPicture(large, medium, thumbnail);

                const user = await userService.createUser(gender, email, phone, cell, nat, id.id, name.id, location.id, login.id, dob.id, registered.id, picture.id);
            }

            return response.status(200).json(user);
        }
        catch(error){
            return response.status(500).json(error.message);
        }

    }

}

export { CRON }