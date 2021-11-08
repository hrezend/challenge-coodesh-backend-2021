import { EntityRepository, Repository } from "typeorm";
import { Login } from "../entities/Login";

@EntityRepository(Login)
class LoginRepository extends Repository<Login>{}

export { LoginRepository }