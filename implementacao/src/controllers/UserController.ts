import { Request, Response } from 'express';

import { UserService } from '../services/UserService';
import UserView from '../views/UserView';

class UserController{

    async getUsers(request: Request, response: Response) : Promise<Response>{
        const userService = new UserService();
        const users = await userService.getUsers();
        
        if(users && !(users.length == 0)){
            return response.status(200).json(UserView.renderMany(users));
        }

        return response.status(400).json({message: 'No users in database.'});
    }

    async getUserByID(request: Request, response: Response) : Promise<Response>{
        const {userId} = request.params;
        
        const userService = new UserService();
        const user = await userService.getUserByID(Number(userId));
        
        if(user){
            return response.status(200).json(UserView.render(user));
        }

        return response.status(400).json({message: 'User does not exists!'});
    }

    async updateUser(request: Request, response: Response) : Promise<Response>{
        const {userId} = request.params;

        const userService = new UserService();
        const user = await userService.updateUser(Number(userId));
        
        return response.status(201).json({message: 'User updated!'});
    }

    async deleteUser(request: Request, response: Response) : Promise<Response>{
        const {userId} = request.params;

        const userService = new UserService();
        const userDelete = await userService.deleteUser(Number(userId));
        
        if(userDelete){
            return response.status(201).json({message: 'User deleted!'});
        }

        return response.status(400).json({message: 'User does not exists.'});
    }

}

export { UserController }