import { Request, Response } from 'express';
import axios from 'axios';

import { configs } from '../configs/configs';
import { UserService } from '../services/UserService';
import { NameService } from '../services/NameService';
import { LocationService } from '../services/LocationService';
import { LoginService } from '../services/LoginService';
import { DobService } from '../services/DobService';
import { ImportedIdService } from '../services/ImportedIdService';
import { RegisteredService } from '../services/RegisteredService';
import { PictureService } from '../services/PictureService';

class CRON{

    async download(request: Request, response: Response) : Promise<Response>{
        
        try{
            const req = await axios.get(`https://randomuser.me/api/?results=${configs.limitePorChamada}`);

            const nameService = new NameService();
            const locationService = new LocationService();
            const loginService = new LoginService();
            const dobService = new DobService();
            const importedIdService = new ImportedIdService();
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

                const user = await userService.createUser(gender, email, phone, cell, nat);

                const name = await nameService.createName(title, first, last, user.id);
                const location = await locationService.createLocation(city, state, country, postcode, latitude, longitude, offset, description, number, nameST, user.id);
                const login = await loginService.createLogin(uuid, username, password, salt, md5, sha1, sha256, user.id);
                const dob = await dobService.createDob(dateDOB, ageDOB, user.id);
                const id = await importedIdService.createId(nameID, valueID, user.id);
                const registered = await registeredService.createRegistered(dateRG, ageRG, user.id);
                const picture = await pictureService.createPicture(large, medium, thumbnail, user.id);
            }

            return response.status(201).json({message: 'Database has been incremented!'});
        }
        catch(error){
            return response.status(400).json(error.message);
        }

    }

}

export { CRON }