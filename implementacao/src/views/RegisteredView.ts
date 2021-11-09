import { Registered } from "../entities/Registered";

export default{

    render(registered: Registered){
        return {
            date: registered.date,
            age: registered.age,
        };
    }
    
}