import { EntityRepository, Repository } from "typeorm";
import { ImportedId } from "../entities/ImportedId";

@EntityRepository(ImportedId)
class ImportedIdRepository extends Repository<ImportedId>{}

export { ImportedIdRepository }