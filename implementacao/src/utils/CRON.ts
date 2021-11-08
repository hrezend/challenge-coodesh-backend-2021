import { Request, Response } from 'express';
import axios from 'axios';

class UserController{

    async download(request: Request, response: Response) : Promise<Response>{
        
        try{
            const req = await axios.get('https://randomuser.me/api/');

            return response.status(200).json(req.data.results);
        }
        catch(error){
            return response.status(500).json(error.message);
        }

    }

}

export { UserController }