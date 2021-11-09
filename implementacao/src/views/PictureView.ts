import { Picture } from "../entities/Picture";

export default{

    render(picture: Picture){
        return {
            large: picture.large,
            medium: picture.medium,
            thumbnail: picture.thumbnail,
        };
    }
    
}