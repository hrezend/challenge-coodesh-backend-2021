import { User } from "../entities/User";

import DobView from "./DobView";
import IdView from "./IdView";
import LocationView from "./LocationView";
import LoginView from "./LoginView";
import NameView from "./NameView";
import PictureView from "./PictureView";
import RegisteredView from "./RegisteredView";

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

            name: NameView.render(user.name),
            login: LoginView.render(user.login),
            location: LocationView.render(user.location),
            picture: PictureView.render(user.picture),
            registered: RegisteredView.render(user.registered),
            dob: DobView.render(user.dob),
            id: IdView.render(user.id),
        };
    },

    renderMany(users: User[]){
        return users.map(user => this.render(user));
    }
    
}