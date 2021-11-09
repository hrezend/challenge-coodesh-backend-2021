import { Login } from "../entities/Login";

export default{

    render(login: Login){
        return {
            uuid: login.uuid,
            username: login.username,
            password: login.password,
            salt: login.salt,
            md5: login.md5,
            sha1: login.sha1,
            sha256: login.sha256,
        };
    }
    
}