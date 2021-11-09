import { Dob } from "../entities/Dob";

export default{

    render(dob: Dob){
        return {
            date: dob.date,
            age: dob.age,
        };
    }
    
}