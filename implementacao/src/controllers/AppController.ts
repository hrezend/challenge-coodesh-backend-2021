import { Request, Response } from 'express';

class AppController{

    async landing(request: Request, response: Response) : Promise<Response>{
        const author = 'Hérson Rezende (https://hrezend.github.io/resume-web)';
        const message = 'REST Back-end Challenge 20201209 Running!';
        const instructions = 'A injeção de dados (CRON) executará [12:00pm].';
        const especifications = 'Para saber os detalhes da especificação da API, consulte o README do desafio!';
        const endpotins = 'Para saber quais são os endpoints da aplicação, consulte o README do projeto!';
        
        return response.status(201).json({author, message, instructions, especifications, endpotins});
    }

}

export { AppController }