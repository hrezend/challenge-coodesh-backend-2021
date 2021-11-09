import { User } from "../entities/User";

import LocationView from "./LocationView";

export default{

    render(user: User){
        return {
            userId: user.userId,
            status: user.status,
            imported_t: user.imported_t,

            email: user.email,
            gender: user.gender,
            phone: user.phone,
            cell: user.cell,
            nat: user.nat,

            name:{
                title: user.name.title,
                first: user.name.first,
                last: user.name.last,
            },
            picture: {
                large: user.picture.large,
                medium: user.picture.medium,
                thumbnail: user.picture.thumbnail,
            },
            registered: {
                date: user.registered.date,
                age: user.registered.age,
            },
            dob: {
                date: user.dob.date,
                age: user.dob.age,
            },
            login: {
                uuid: user.login.uuid,
                username: user.login.username,
                password: user.login.password,
                md5: user.login.md5,
                salt: user.login.salt,
                sha1: user.login.sha1,
                sha256: user.login.sha256,
            },
            id: {
                uuid: user.login.uuid,
                username: user.login.username,
            },
            location: LocationView.render(user.location),
        };
    },

    renderMany(users: User[]){
        return users.map(user => this.render(user));
    }
    
}