import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController{

    async landing(request: Request, response: Response) : Promise<Response>{
        return response.status(201).json({message: 'REST Back-end Challenge 20201209 Running'});
    }

    async getUsers(request: Request, response: Response) : Promise<Response>{
        const userService = new UserService();
        const users = userService.getUsers();
        
        return response.status(201).json(users);
    }

    async getUserByID(request: Request, response: Response) : Promise<Response>{
        const { id } = request.params;
        const userService = new UserService();
        const user = userService.getUserByID(id);
        
        return response.status(201).json(user);
    }

    async updateUser(request: Request, response: Response) : Promise<Response>{
        const { id } = request.params;
        const userService = new UserService();
        const user = userService.updateUser(id);
        
        return response.status(201).json({message: 'User updated!'});
    }

    async deleteUser(request: Request, response: Response) : Promise<Response>{
        const { id } = request.params;
        const userService = new UserService();
        const user = userService.deleteUser(id);
        
        return response.status(201).json({message: 'User deleted!'});
    }

}

export { UserController }