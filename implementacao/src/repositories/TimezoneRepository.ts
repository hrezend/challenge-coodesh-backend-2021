import { EntityRepository, Repository } from "typeorm";
import { Timezone } from "../entities/Timezone";

@EntityRepository(Timezone)
class TimezoneRepository extends Repository<Timezone>{}

export { TimezoneRepository }