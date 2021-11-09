import { getCustomRepository, Repository } from "typeorm";

import { Picture } from "../entities/Picture";
import { PictureRepository } from "../repositories/PictureRepository";

class PictureService{

    private pictureRepository : Repository<Picture>;

    constructor(){
        this.pictureRepository = getCustomRepository(PictureRepository);
    }

    async createPicture(large: string, medium: string, thumbnail: string, user_id: Number){
        const picture = this.pictureRepository.create({large, medium, thumbnail, user_id});
        
        await this.pictureRepository.save(picture);

        return picture;
    }

}

export { PictureService }