import { EntityRepository, Repository } from "typeorm";
import { Picture } from "../entities/Picture";

@EntityRepository(Picture)
class PictureRepository extends Repository<Picture>{}

export { PictureRepository }