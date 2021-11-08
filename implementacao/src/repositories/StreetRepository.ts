import { EntityRepository, Repository } from "typeorm";
import { Street } from "../entities/Street";

@EntityRepository(Street)
class StreetRepository extends Repository<Street>{}

export { StreetRepository }