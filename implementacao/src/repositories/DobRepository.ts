import { EntityRepository, Repository } from "typeorm";
import { Dob } from "../entities/Dob";

@EntityRepository(Dob)
class DobRepository extends Repository<Dob>{}

export { DobRepository }