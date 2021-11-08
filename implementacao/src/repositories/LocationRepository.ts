import { EntityRepository, Repository } from "typeorm";
import { Location } from "../entities/Location";

@EntityRepository(Location)
class LocationRepository extends Repository<Location>{}

export { LocationRepository }