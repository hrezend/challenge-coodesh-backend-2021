import { EntityRepository, Repository } from "typeorm";
import { Name } from "../entities/Name";

@EntityRepository(Name)
class NameRepository extends Repository<Name>{}

export { NameRepository }