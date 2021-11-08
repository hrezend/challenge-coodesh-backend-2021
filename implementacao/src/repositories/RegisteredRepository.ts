import { EntityRepository, Repository } from "typeorm";
import { Registered } from "../entities/Registered";

@EntityRepository(Registered)
class RegisteredRepository extends Repository<Registered>{}

export { RegisteredRepository }