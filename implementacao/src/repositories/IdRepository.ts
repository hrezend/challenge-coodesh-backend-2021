import { EntityRepository, Repository } from "typeorm";
import { Id } from "../entities/Id";

@EntityRepository(Id)
class IdRepository extends Repository<Id>{}

export { IdRepository }