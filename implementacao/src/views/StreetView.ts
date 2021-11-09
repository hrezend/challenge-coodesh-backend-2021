import { Street } from "../entities/Street";

export default{

    render(street: Street){
        return {
            name: street.name,
            number: street.number,
        };
    }
    
}