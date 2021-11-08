import { EntityRepository, Repository } from "typeorm";
import { Coordinates } from "../entities/Coordinates";

@EntityRepository(Coordinates)
class CoordinatesRepository extends Repository<Coordinates>{}

export { CoordinatesRepository }