import { Request, Response } from 'express';

import { UserService } from '../services/UserService';
import UserView from '../views/UserView';

class UserController{

    async landing(request: Request, response: Response) : Promise<Response>{
        return response.status(201).json({message: 'REST Back-end Challenge 20201209 Running!'});
    }

    async getUsers(request: Request, response: Response) : Promise<Response>{
        const userService = new UserService();
        const users = await userService.getUsers();
        
        if(users){
            return response.status(200).json(users);
        }

        return response.status(400).json({message: 'Users does not exists!'});
    }

    async getUserByID(request: Request, response: Response) : Promise<Response>{
        const {userId} = request.params;
        
        const userService = new UserService();
        const user = await userService.getUserByID(userId);
        
        if(user){
            return response.status(200).json(user);
        }

        return response.status(400).json({message: 'User does not exists!'});
    }

    async updateUser(request: Request, response: Response) : Promise<Response>{
        const {userId} = request.params;

        const userService = new UserService();
        const user = await userService.updateUser(userId);
        
        return response.status(201).json({message: 'User updated!'});
    }

    async deleteUser(request: Request, response: Response) : Promise<Response>{
        const {userId} = request.params;

        const userService = new UserService();
        const userDelete = await userService.deleteUser(userId);
        
        if(userDelete){
            return response.status(201).json({message: 'User deleted!'});
        }

        return response.status(400).json({message: 'User does not exists.'});
    }

}

export { UserController }